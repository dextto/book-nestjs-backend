import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  private getHello(): string {
    return 'This is LoggerService provider';
  }
}
