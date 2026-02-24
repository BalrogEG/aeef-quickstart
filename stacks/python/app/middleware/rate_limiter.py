import time
from collections import defaultdict
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse


class RateLimiterMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, max_requests: int = 100, window_seconds: int = 60):
        super().__init__(app)
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.clients: dict[str, list[float]] = defaultdict(list)

    async def dispatch(self, request: Request, call_next):
        client_ip = request.client.host if request.client else "unknown"
        now = time.monotonic()

        # Clean old entries
        self.clients[client_ip] = [
            t for t in self.clients[client_ip]
            if now - t < self.window_seconds
        ]

        if len(self.clients[client_ip]) >= self.max_requests:
            oldest = self.clients[client_ip][0]
            retry_after = int(self.window_seconds - (now - oldest)) + 1
            return JSONResponse(
                status_code=429,
                content={"error": "Too many requests", "retry_after": retry_after},
            )

        self.clients[client_ip].append(now)
        return await call_next(request)
