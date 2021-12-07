import { Controller, Get, Inject } from '@nestjs/common';
import { CommonService } from './common/common-service';

@Controller()
export class AppController {
  constructor(
    private readonly commonService: CommonService,
  ) { }

  @Get('/common-hello')
  getCommonHello(): string {
    return this.commonService.hello();
  }
}
