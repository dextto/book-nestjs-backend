import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  public async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto)
    const { name, email, password } = dto;

    await this.usersService.createUser(name, email, password);
  }
}
