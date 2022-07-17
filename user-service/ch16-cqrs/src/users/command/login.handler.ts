import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { LoginCommand } from './login.command';

@Injectable()
@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
  constructor(
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
    private authService: AuthService,
  ) { }

  async execute(command: LoginCommand) {
    const { email, password } = command;

    const user = await this.usersRepository.findOne({
      where: { email, password }
    });

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    return this.authService.login({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }

}