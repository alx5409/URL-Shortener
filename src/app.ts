import express from 'express';
import type { Request, Response } from 'express';

import authRoutes from './routes/auth.routes.js'
import urlRoutes from './routes/url.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { redirectToOriginal } from './controllers/url.controller.js';

const app = express();

app.use(express.json());

// Example route
app.get('/', (_req: Request, res: Response) => {
    res.send({ message: 'URL Shortener backend is running.' });
});

// Public routes
app.use('/api/auth', authRoutes)
app.use('/api/urls', urlRoutes)
app.get('/:slug', redirectToOriginal);

app.use(errorHandler);

export default app;