import { Module } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, EmailService],
})
export class AppModule { }
