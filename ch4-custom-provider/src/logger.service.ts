import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  getHello(): string {
    return 'This is LoggerService provider';
  }
}
