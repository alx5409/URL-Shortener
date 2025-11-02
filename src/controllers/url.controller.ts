import type { Request, Response } from 'express'

export const shortenUrl = (_req: Request, res: Response) => {
  res.json({ message: 'URL shortened!' });
};

export const getUserUrls = (_req: Request, res: Response) => {
  res.json({ urls: [] });
};