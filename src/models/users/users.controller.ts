import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './useres.service';
import { UserDto } from 'src/models/users/dto/user.dto';

@Controller('/user')
export class UsersContollers {
  constructor(private readonly service: UsersService) {}
  @Get('/all')
  getAlluseres() {
    return this.service.getAlluseres();
  }
  @Post('/sign-up')
  signUpUser(@Body() dto: UserDto) {
    return this.service.signUp(dto);
  }
}
