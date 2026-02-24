import pytest
from httpx import AsyncClient, ASGITransport
from fastapi import FastAPI
from app.middleware.rate_limiter import RateLimiterMiddleware


@pytest.fixture
def limited_app():
    test_app = FastAPI()
    test_app.add_middleware(RateLimiterMiddleware, max_requests=3, window_seconds=60)

    @test_app.get("/test")
    async def test_endpoint():
        return {"ok": True}

    return test_app


@pytest.fixture
async def limited_client(limited_app):
    transport = ASGITransport(app=limited_app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac


async def test_allows_requests_under_limit(limited_client):
    response = await limited_client.get("/test")
    assert response.status_code == 200
    assert response.json()["ok"] is True


async def test_blocks_requests_over_limit(limited_client):
    for _ in range(3):
        await limited_client.get("/test")

    response = await limited_client.get("/test")
    assert response.status_code == 429
    assert response.json()["error"] == "Too many requests"
