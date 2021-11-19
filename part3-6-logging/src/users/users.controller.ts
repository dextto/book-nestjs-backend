import { Body, ClassSerializerInterceptor, Controller, Get, Headers, Inject, Param, Post, Query, UseInterceptors, LoggerService, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WinstonLogger } from 'winston';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserInfo } from './UserInfo';
import { UsersService } from './users.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {

  constructor(
    // @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger,
    // @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService,
    // private readonly logger: Logger,
    @Inject(Logger) private readonly logger: LoggerService,
    private usersService: UsersService,
    private authService: AuthService,
  ) { }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    // this.printWinstonLog(dto);
    this.printLoggerServiceLog();

    const { name, email, password } = dto;

    await this.usersService.createUser(name, email, password);
  }

  // private printWinstonLog(dto) {
  //   console.log(this.logger.name);

  //   this.logger.error('error: ', dto);
  //   this.logger.warn('warn: ', dto);
  //   this.logger.info('info: ', dto);
  //   this.logger.http('http: ', dto);
  //   this.logger.verbose('verbose: ', dto);
  //   this.logger.debug('debug: ', dto);
  //   this.logger.silly('silly: ', dto);
  // }

  private printLoggerServiceLog() {
    this.logger.error('error: ');
    this.logger.warn('warn: ');
    this.logger.log('log: ');
    this.logger.verbose('verbose: ');
    this.logger.debug('debug: ');
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;

    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;

    return await this.usersService.login(email, password);
  }

  @Get(':id')
  async getUserInfo(@Headers() headers: any, @Param('id') userId: string): Promise<UserInfo> {
    const jwtString = headers.authorization.split('Bearer ')[1];

    this.authService.verify(jwtString);

    return this.usersService.getUserInfo(userId);
  }
}
