import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';
import { Logger2Middleware } from './logger2/logger2.middleware';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware, Logger2Middleware)
      // .exclude({ path: 'users', method: RequestMethod.GET },)
      .forRoutes(UsersController)
  }
}
