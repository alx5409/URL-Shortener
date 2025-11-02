import type { Request, Response } from 'express'

// Controller to handle URL shortening
export const shortenUrl = (_req: Request, res: Response) => {
  res.json({ message: 'URL shortened!' });
};

// Controller to get all URLs for a user
export const getUserUrls = (_req: Request, res: Response) => {
  res.json({ urls: [] });
};