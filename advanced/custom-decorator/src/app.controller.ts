import { Controller, Get, Req, ValidationPipe } from '@nestjs/common';
import { IsString } from 'class-validator';
import { AppService } from './app.service';
import { User } from './user.decorator';
import { UserData } from './user-data.decorator';

// interface UserEntity {
//   name: string;
//   email: string;
// }

class UserEntity {
  @IsString()
  name: string;

  @IsString()
  email: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @User 데코레이터를 사용하지 않을 때
  // @Get()
  // getHello(@Req() req) {
  //   console.log(req.user);
  // }

  @Get()
  getHello(@User() user: UserEntity) {
    console.log(user);
  }

  @Get('/username')
  getHello2(@UserData('name') name: string) {
    console.log(name);
  }

  @Get('/with-pipe')
  getHello3(@User(new ValidationPipe({ validateCustomDecorators: true })) user: UserEntity) {
    console.log(user);
  }
}
