import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;

    return `유저를 생성했습니다. 이름: ${name}, 이메일: ${email}`;
  }

  @Get()
  findAll(@Res() res) {
    const users = this.usersService.findAll()

    return res.status(200).send(users);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (+id < 1) {
      throw new NotFoundException('User is not found');
    }

    return this.usersService.findOne(+id);
  }

  @HttpCode(202)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
