import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
