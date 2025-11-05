import type { Request, Response } from 'express'
import { generateSlug } from '../utils/slug.util.js';
import { isValidUrl } from '../utils/url.util.js';
import { Url } from '../models/url.model.js';
import { Types } from 'mongoose';

// Controller to handle URL shortening
export const shortenUrl = async (req: Request, res: Response) => {
  const { originalUrl, length } = req.body;
  const userId = req.user?.userId;

  console.log('Body received:', req.body);

  if (!originalUrl || !isValidUrl(originalUrl)) {
    return res.status(400).json({ message: 'A valid URL is required.' });
  }
  if (length !== undefined && length < 0) {
    return res.status(400).json({ message: 'Length must be a positive number.' });
  }
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized: User ID is missing.' });
  }

  const slug = generateSlug(length);
  // Save to database
  await Url.create({ 
    userId: new Types.ObjectId(userId),
    originalUrl,
    shortUrl: slug
  });

  const shortUrl = `${req.protocol}://${req.get('host')}/${slug}`;

  res.status(201).json({ shortUrl, originalUrl });
};

// Redirect to original URL
export const redirectToOriginal = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const urlDoc = await Url.findOne({ shortUrl: slug });

  console.log('Slug received:', slug);
  console.log('URL Document found:', urlDoc);

  if (!urlDoc) {
    return res.status(404).json({ message: 'Short URL not found.' });
  }
  res.redirect(urlDoc.originalUrl);
};

// Controller to get all URLs for a user
export const getUserUrls = (_req: Request, res: Response) => {
  res.json({ urls: [] });
};