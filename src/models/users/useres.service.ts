import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/models/users/dto/user.dto';
import { User } from 'src/schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  getAlluseres() {
    return this.userModel.find({});
  }
  async signUp(dto: UserDto) {
    const newUser = await this.userModel.create(dto);
    return newUser;
  }
}
