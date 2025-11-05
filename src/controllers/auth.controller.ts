import type { Request, Response } from 'express';
import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

type AuthBody = {
  email: string;
  password: string;
};

// User registration controller
export const register = async (req: Request<{}, {}, AuthBody>, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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

// User login controller
export const login = async (req: Request<{}, {}, AuthBody>, res: Response) => {
  const { email, password } = req.body;
  // Early return if email or password is missing
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // Early return if user is not found
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  // Check password validity
  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: '1d' }
  );
  console.log('Generated JWT token for user:', user._id);
  res.status(200).json({ message: 'Login successful!', token });
};

