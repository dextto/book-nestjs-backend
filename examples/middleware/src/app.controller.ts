import { Request } from 'express';
import { Controller, Get, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Req() req: Request): string {
    return this.appService.getHello();
  }
}
