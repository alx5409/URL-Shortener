import type { Request, Response } from 'express';
import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // Hash the password securely
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const user = new User({ email, passwordHash });
    await user.save();
    res.status(201).json({ message: 'User registered!' });
  } catch (err: any) {
    if (err.code === 11000) {
      // Duplicate email
      return res.status(409).json({ message: 'Email already registered.' });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};