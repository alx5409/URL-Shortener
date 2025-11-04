import type { Request, Response } from 'express'
import { generateSlug } from '../utils/slug.util.js';
import { isValidUrl } from '../utils/url.util.js';

// Controller to handle URL shortening
export const shortenUrl = (req: Request, res: Response) => {
  const { originalUrl } = req.body;
  const { length } = req.body;

  if (!originalUrl || !isValidUrl(originalUrl)) {
    return res.status(400).json({ message: 'A valid URL is required.' });
  }
  if (length !== undefined && length < 0) {
    return res.status(400).json({ message: 'Length must be a positive number.' });
  }

  const slug = generateSlug(length);
  const shortUrl = `${req.protocol}://${req.get('host')}/${slug}`;

  res.status(201).json({ shortUrl, originalUrl });
};

// Controller to get all URLs for a user
export const getUserUrls = (_req: Request, res: Response) => {
  res.json({ urls: [] });
};