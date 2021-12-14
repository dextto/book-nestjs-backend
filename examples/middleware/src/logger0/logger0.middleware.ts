import { Request, Response, NextFunction } from 'express';

export function logger0(req: Request, res: Response, next: NextFunction) {
  console.log(`Request0...`);
  next();
};