import { Router } from 'express';

import { shortenUrl, getUserUrls, redirectToOriginal } from '../controllers/url.controller.js';
// import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Protect routes with authenticateToken middleware
router.post('/shorten', /*authenticateToken,*/ shortenUrl);
router.get('/my-urls', /*authenticateToken,*/ getUserUrls);
router.get('/:slug', /*authenticateToken,*/redirectToOriginal);

export default router;