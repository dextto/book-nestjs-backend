import { ICommand } from '@nestjs/cqrs';

export class LoginCommand implements ICommand {
  constructor(
    readonly email: string,
    readonly password: string,
  ) { }
}