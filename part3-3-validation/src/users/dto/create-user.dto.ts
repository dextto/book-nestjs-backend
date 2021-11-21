import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { NotIn } from 'src/util/decorators/not-in.decorator';

export class CreateUserDto {
  // @Transform(params => {
  //   console.log(params);
  //   return params.value;
  // })

  @Transform(({ value }) => value.trim())
  // @Transform(({ value, obj }) => {
  //   if (obj.password.includes(value.trim())) {
  //     throw new BadRequestException('password는 name과 같은 문자열을 포함할 수 없습니다.');
  //   }
  //   return value.trim();
  // })
  @NotIn('password', { message: 'password는 name과 같은 문자열을 포함할 수 없습니다.' })
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;

  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  readonly password: string;
}