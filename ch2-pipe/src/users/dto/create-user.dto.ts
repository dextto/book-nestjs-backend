import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly name: string;

  @IsEmail()
  email: string;
}
