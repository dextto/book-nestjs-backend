import { Logger, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { query } from 'express';
import { AuthModule } from 'src/auth/auth.module';
import { EmailModule } from 'src/email/email.module';
import { CreateUserHandler } from './command/create-user.handler';
import { LoginHandler } from './command/login.handler';
import { VerifyAccessTokenHandler } from './command/verify-access-token.handler';
import { VerifyEmailHandler } from './command/verify-email.handler';
import { UserEntity } from './entity/user.entity';
import { UserEventsHandler } from './event/user-events.handler';
import { GetUserInfoQueryHandler } from './query/get-user-info.handler';
import { UsersController } from './users.controller';

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
]

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forFeature([UserEntity]),
    AuthModule,
    CqrsModule,
  ],
  controllers: [UsersController],
  providers: [
    ...commandHandlers,
    ...queryHandlers,
    ...eventHandlers,
    Logger,
  ],
})
export class UsersModule { }
