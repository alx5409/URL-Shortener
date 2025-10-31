import { Router } from 'express';
import type { Request, Response } from 'express'
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = Router();

// Example controller functions (replace with your actual implementations)
const shortenUrl = (req: Request, res: Response) => {
  res.json({ message: 'URL shortened!' });
};

const getUserUrls = (req: Request, res: Response) => {
  res.json({ urls: [] });
};

// Protect routes with authenticateToken middleware
router.post('/shorten', authenticateToken, shortenUrl);
router.get('/my-urls', authenticateToken, getUserUrls);

export default router;