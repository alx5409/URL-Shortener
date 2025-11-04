import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Will be used to protect routes that require authentication
export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get token from "Bearer <token>"
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user as { userId: string; email: string };
    next();
  });
}