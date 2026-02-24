import express from 'express';
import { healthRouter } from './health';
import { rateLimiter } from './middleware/rate-limiter';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(rateLimiter({ windowMs: 60_000, maxRequests: 100 }));

app.use('/health', healthRouter);

app.get('/', (_req, res) => {
  res.json({ message: 'AEEF Quick Start API', version: '1.0.0' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export { app };
