import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from 'src/users/domain/user-created.event';
import { IEmailService } from '../adapter/iemail.service';

@EventsHandler(UserCreatedEvent)
export class UserEventsHandler implements IEventHandler<UserCreatedEvent> {
  constructor(
    @Inject('EmailService') private emailService: IEmailService,
  ) { }

  async handle(event: UserCreatedEvent) {
    switch (event.name) {
      case UserCreatedEvent.name: {
        console.log('UserCreatedEvent!');
        const { email, signupVerifyToken } = event as UserCreatedEvent;
        await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
        break;
      }
      default:
        break;
    }
  }
}