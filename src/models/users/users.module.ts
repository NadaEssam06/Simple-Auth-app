import { Module } from '@nestjs/common';
import { UsersContollers } from './users.controller';
import { UsersService } from './useres.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/users.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersContollers],
  providers: [UsersService],
})
export class UsersModule {}
