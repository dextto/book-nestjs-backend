import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthService } from 'src/auth/auth.service';
import { LoginCommand } from './login.command';
import { IUserRepository } from 'src/users/domain/repository/iuser.repository';

@Injectable()
@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
    private authService: AuthService,
  ) { }

  async execute(command: LoginCommand) {
    const { email, password } = command;

    const user = await this.userRepository.findByEmailAndPassword(email, password);
    if (user === null) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    return this.authService.login({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
    });
  }

}