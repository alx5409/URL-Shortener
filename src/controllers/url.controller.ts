import type { Request, Response } from 'express'
// import { Url } from '../models/url.model.js';
import { generateSlug } from '../utils/slug.util.js';

// Controller to handle URL shortening
export const shortenUrl = (req: Request, res: Response) => {
  const { originalUrl } = req.body;
  const { length } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ message: 'Original URL is required.' });
  }
  if (length !== undefined && length < 0) {
    return res.status(400).json({ message: 'Length must be a positive number.' });
  }

  const slug = generateSlug(length);
  const shortUrl = `${req.protocol}://${req.get('host')}/${slug}`;

  res.status(201).json({ shortUrl, originalUrl });
  res.json({ message: 'URL shortened!' });
};

// Controller to get all URLs for a user
export const getUserUrls = (_req: Request, res: Response) => {
  res.json({ urls: [] });
};