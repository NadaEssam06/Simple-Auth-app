import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true, minlength: 8 })
  Password: string;
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, min: 16, max: 60 })
  age: number;
  @Prop({ required: true, min: 16, max: 60, match: /^01d{9}$/ })
  mobileNumber: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
