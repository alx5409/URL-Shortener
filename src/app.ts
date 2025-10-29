import express from 'express';
import type { Request, Response } from 'express';

import authRoutes from './routes/auth.routes.js'

const app = express();

app.use(express.json());

// Example route
interface GetRootResponse {
    message: string;
}

app.get('/', (_req: Request, res: Response<GetRootResponse>) => {
    res.send({ message: 'URL Shortener backend is running!' });
});

app.use('/api/auth', authRoutes)

import type { NextFunction } from 'express';

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

export default app;