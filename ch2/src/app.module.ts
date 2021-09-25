import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApiController } from './api-controller/api-controller.controller';
import { BaseService } from './base-service';
import { ServiceA } from './service-A';
import { ServiceB } from './service-B';
import { LoggerService } from './logger.service';
import { CoreModule } from './core/core.module';

const loggerAliasProvider = {
  provide: 'AliasedLoggerService',
  useExisting: LoggerService,
};

@Module({
  controllers: [ApiController, AppController],
  providers: [AppService, BaseService, ServiceA, ServiceB, LoggerService, loggerAliasProvider],
  imports: [UsersModule, CoreModule],
})
export class AppModule {}
