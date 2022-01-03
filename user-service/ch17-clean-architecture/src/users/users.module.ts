import { Logger, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { query } from 'express';
import { AuthModule } from 'src/auth/auth.module';
import { EmailModule } from 'src/email/email.module';
import { CreateUserHandler } from './application/command/create-user.handler';
import { LoginHandler } from './application/command/login.handler';
import { VerifyAccessTokenHandler } from './application/command/verify-access-token.handler';
import { VerifyEmailHandler } from './application/command/verify-email.handler';
import { UserFactory } from './domain/user.factory';
import { UserEntity } from './infra/db/entity/user.entity';
import { UserEventsHandler } from './application/event/user-events.handler';
import { GetUserInfoQueryHandler } from './application/query/get-user-info.handler';
import { UsersController } from './interface/users.controller';
import { UserRepository } from './infra/db/repository/UserRepository';
import { EmailService } from './infra/adapter/email.service';

const commandHandlers = [
  CreateUserHandler,
  VerifyEmailHandler,
  LoginHandler,
  VerifyAccessTokenHandler,
];

const queryHandlers = [
  GetUserInfoQueryHandler,
];

const eventHandlers = [
  UserEventsHandler,
];

const factories = [
  UserFactory,
];

const repositories = [
  { provide: 'UserRepository', useClass: UserRepository },
  { provide: 'EmailService', useClass: EmailService },
];

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forFeature([UserEntity]),
    AuthModule,
    CqrsModule,
  ],
  controllers: [UsersController],
  providers: [
    Logger,
    ...commandHandlers,
    ...queryHandlers,
    ...eventHandlers,
    ...factories,
    ...repositories,
  ],
})
export class UsersModule { }
