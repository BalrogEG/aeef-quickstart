import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import express from 'express';
import { rateLimiter } from './rate-limiter';

function createTestApp(options: { windowMs: number; maxRequests: number }) {
  const app = express();
  app.use(rateLimiter(options));
  app.get('/test', (_req, res) => res.json({ ok: true }));
  return app;
}

describe('rateLimiter', () => {
  it('allows requests under the limit', async () => {
    const app = createTestApp({ windowMs: 60_000, maxRequests: 5 });

    const res = await request(app).get('/test');
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });

  it('blocks requests over the limit', async () => {
    const app = createTestApp({ windowMs: 60_000, maxRequests: 2 });

    await request(app).get('/test');
    await request(app).get('/test');
    const res = await request(app).get('/test');

    expect(res.status).toBe(429);
    expect(res.body.error).toBe('Too many requests');
    expect(res.body).toHaveProperty('retryAfter');
  });

  it('resets after window expires', async () => {
    const app = createTestApp({ windowMs: 100, maxRequests: 1 });

    await request(app).get('/test');
    const blocked = await request(app).get('/test');
    expect(blocked.status).toBe(429);

    // Wait for window to expire
    await new Promise(resolve => setTimeout(resolve, 150));

    const allowed = await request(app).get('/test');
    expect(allowed.status).toBe(200);
  });
});
