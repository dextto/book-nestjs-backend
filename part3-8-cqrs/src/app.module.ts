import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import authConfig from './config/authConfig';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
import { UsersModule } from './users/users.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from 'src/health-check/health-check.controller';
import { DogHealthIndicator } from './health-check/dog.health';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig, authConfig],
      isGlobal: true,
      validationSchema,
    }),
    UsersModule,
    TypeOrmModule.forRoot(),
    HttpModule,
    TerminusModule,
  ],
  controllers: [HealthCheckController],
  providers: [DogHealthIndicator],
})
export class AppModule { }
