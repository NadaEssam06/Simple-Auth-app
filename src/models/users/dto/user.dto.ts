import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  Password: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  mobileNumber: number;
}
