from fastapi import FastAPI, Request, Response
from app.middleware.rate_limiter import RateLimiterMiddleware

app = FastAPI(
    title="AEEF Quick Start API",
    version="1.0.0",
    description="AEEF Quick Start Reference Implementation (Python)",
)

app.add_middleware(RateLimiterMiddleware, max_requests=100, window_seconds=60)


@app.get("/")
async def root():
    return {"message": "AEEF Quick Start API", "version": "1.0.0"}


@app.get("/health")
async def health():
    import time
    return {
        "status": "healthy",
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
    }
