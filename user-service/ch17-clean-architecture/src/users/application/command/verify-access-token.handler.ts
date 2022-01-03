import * as jwt from 'jsonwebtoken';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { VerifyAccessTokenCommand } from './verify-access-token.command';
import authConfig from 'src/config/authConfig';
import { ConfigType } from '@nestjs/config';

interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
@CommandHandler(VerifyAccessTokenCommand)
export class VerifyAccessTokenHandler implements ICommandHandler<VerifyAccessTokenCommand> {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
  ) { }

  async execute(command: VerifyAccessTokenCommand) {
    const { jwtString } = command;

    try {
      const payload = jwt.verify(jwtString, this.config.jwtSecret) as (jwt.JwtPayload | string) & User;

      const { id, email } = payload;

      return {
        userId: id,
        email,
      }

    } catch (e) {
      throw new UnauthorizedException()
    }
  }

}