import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { signInUser, signUpUser } from 'src/models/users/dto/user.dto';
import { User } from 'src/schemas/users.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly ConfigService: ConfigService,
  ) {}
  getAlluseres(user: string) {
    const email = user;
    return this.userModel.find({ email: { $ne: email } });
  }
  async signUp(dto: signUpUser) {
    const { email, password } = dto;
    const fouduser = await this.userModel.findOne({ email });
    if (fouduser) {
      throw new ConflictException('Something wrong with email or passward');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userModel.create({
      ...dto,
      password: hashedPassword,
    });
    const { password: _pass, ...safeData } = newUser.toJSON();
    return safeData;
  }
  async signIn(dto: signInUser) {
    const { email, password } = dto;
    const foundUser = await this.userModel.findOne({ email });
    if (!foundUser) {
      throw new ConflictException('Something wrong with email or passward');
    }
    const isMach = await bcrypt.compare(password, foundUser.password);
    if (!isMach) {
      throw new UnauthorizedException('Something wrong with email or passward');
    }
    const payload = email;
    const token = jwt.sign(
      payload,
      this.ConfigService.getOrThrow<string>('SECRET_KEY'),
    );
    return {
      token,
    };
  }
  async getUserProfile(user: string) {
    const email = user;
    const foundUser = await this.userModel.findOne({ email });
    if (!foundUser) {
      throw new UnauthorizedException();
    }
    const { password: _pass, ...safeData } = foundUser.toJSON();
    return safeData;
  }
}
