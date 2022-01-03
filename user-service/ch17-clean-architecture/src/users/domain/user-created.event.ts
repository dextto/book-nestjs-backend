import { IEvent } from '@nestjs/cqrs';
import { CqrsEvent } from './cqrs-event';

export class UserCreatedEvent extends CqrsEvent implements IEvent {
  constructor(
    readonly email: string,
    readonly signupVerifyToken: string,
  ) {
    super(UserCreatedEvent.name);
  }
}