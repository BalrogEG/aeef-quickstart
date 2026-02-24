import { Request, Response, NextFunction } from 'express';

interface RateLimiterOptions {
  windowMs: number;
  maxRequests: number;
}

interface ClientRecord {
  count: number;
  resetTime: number;
}

export function rateLimiter(options: RateLimiterOptions) {
  const clients = new Map<string, ClientRecord>();

  // Cleanup expired entries periodically
  const cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of clients) {
      if (now > record.resetTime) {
        clients.delete(key);
      }
    }
  }, options.windowMs);

  // Allow cleanup timer to not prevent process exit
  if (cleanupInterval.unref) {
    cleanupInterval.unref();
  }

  return (req: Request, res: Response, next: NextFunction): void => {
    const clientIp = req.ip ?? req.socket.remoteAddress ?? 'unknown';
    const now = Date.now();
    const record = clients.get(clientIp);

    if (!record || now > record.resetTime) {
      clients.set(clientIp, { count: 1, resetTime: now + options.windowMs });
      next();
      return;
    }

    if (record.count >= options.maxRequests) {
      res.status(429).json({
        error: 'Too many requests',
        retryAfter: Math.ceil((record.resetTime - now) / 1000),
      });
      return;
    }

    record.count++;
    next();
  };
}
