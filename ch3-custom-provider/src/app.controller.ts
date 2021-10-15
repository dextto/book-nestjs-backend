import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('AliasedLoggerService') private readonly serviceAlias: any,
  ) { }

  @Get('/alias')
  getHello(): string {
    return this.serviceAlias.getHello();
  }
}
