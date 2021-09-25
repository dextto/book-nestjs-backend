import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonService } from './common/common-service';
import { ServiceB } from './service-B';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly serviceB: ServiceB,
    @Inject('AliasedLoggerService') private readonly serviceAlias: any,
    private readonly commonService: CommonService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/serviceB')
  getHelloC(): string {
    return this.serviceB.getHello();
  }

  @Get('/alias')
  getHelloAlias(): string {
    return this.serviceAlias.getHello();
  }

  @Get('/common-hello')
  getCommonHello(): string {
    return this.commonService.hello();
  }
}
