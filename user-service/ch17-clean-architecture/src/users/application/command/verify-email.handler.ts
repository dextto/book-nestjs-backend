import { Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { VerifyEmailCommand } from './verify-email.command';
import { AuthService } from 'src/auth/auth.service';
import { IUserRepository } from 'src/users/domain/repository/iuser.repository';

@Injectable()
@CommandHandler(VerifyEmailCommand)
export class VerifyEmailHandler implements ICommandHandler<VerifyEmailCommand> {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
    private authService: AuthService,
  ) { }

  async execute(command: VerifyEmailCommand) {
    const { signupVerifyToken } = command;

    const user = await this.userRepository.findBySignupVerifyToken(signupVerifyToken);
    if (user !== null) {
      throw new UnprocessableEntityException('해당 이메일로는 가입할 수 없습니다.');
    }

    return this.authService.login({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
    });
  }
}