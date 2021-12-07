import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceA {
  getHello(): string {
    return 'Hello World A!';
  }
}
