import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { UsersService } from './useres.service';
import { signInUser, signUpUser } from 'src/models/users/dto/user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
@ApiBearerAuth()
@Controller('/user')
export class UsersContollers {
  constructor(private readonly service: UsersService) {}
  @Get('/all')
  getAlluseres(@Req() req: Request) {
    const user = req['user'];
    return this.service.getAlluseres(user);
  }
  @Get('/my-profile')
  getUserProfile(@Req() req: Request) {
    const user = req['user'];
    return this.service.getUserProfile(user);
  }
  @Post('/sign-up')
  signUpUser(@Body() dto: signUpUser) {
    return this.service.signUp(dto);
  }
  @Post('/sign-in')
  signInuser(@Body() dto: signInUser) {
    return this.service.signIn(dto);
  }
}
