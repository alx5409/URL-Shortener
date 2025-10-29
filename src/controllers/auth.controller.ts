import type { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  res.send({ message: 'Register endpoint' });
};