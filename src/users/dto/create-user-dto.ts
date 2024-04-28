import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Unique user mail' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;
  @ApiProperty({ example: 'qwerty12345', description: 'User password' })
  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'More then 4, less then 16.' })
  readonly password: string;
}