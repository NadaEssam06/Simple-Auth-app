import { ApiProperty } from '@nestjs/swagger';

class UserDto {
  @ApiProperty({ example: 'a@babel.com', required: true })
  email: string;
  @ApiProperty({ example: '123456789', required: true })
  password: string;
}
export class signInUser extends UserDto {}
export class signUpUser extends UserDto {
  @ApiProperty({ example: 'Nada Essam' })
  fullName: string;
  @ApiProperty({ example: 25 })
  age: number;
  @ApiProperty({ example: '01012345678' })
  mobileNumber: string;
}
