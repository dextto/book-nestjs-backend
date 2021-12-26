import { Request, Response, NextFunction } from 'express';

export function logger3(req: Request, res: Response, next: NextFunction) {
  console.log(`Request3...`);
  next();
};