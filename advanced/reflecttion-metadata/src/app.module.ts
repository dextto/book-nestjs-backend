import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassRolesGuard } from './class-roles.guard';
import { HandlerRolesGuard } from './handler-roles.guard';
import { RolesGuard } from './roles.guard';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: HandlerRolesGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: ClassRolesGuard,
    // },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [UsersModule],
})
export class AppModule { }
