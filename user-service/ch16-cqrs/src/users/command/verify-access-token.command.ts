import { ICommand } from '@nestjs/cqrs';

export class VerifyAccessTokenCommand implements ICommand {
  constructor(
    readonly jwtString: string,
  ) { }
}