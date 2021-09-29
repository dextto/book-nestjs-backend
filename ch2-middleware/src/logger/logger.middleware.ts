import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    // res.send('DONE'); // 이 라인 주석을 풀고 next()를 주석으로 막으면 미들웨어 수행을 중단합니다.
    next();  // res.send와 이 라인을 주석으로 막으면 행이 걸립니다.
  }
}
