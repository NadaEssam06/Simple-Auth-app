import { Module } from '@nestjs/common';
import { UsersModule } from './models/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './models/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => {
        const uri = ConfigService.getOrThrow<string>('MONGO_DB_URI');
        return {
          uri,
        };
      },
      inject: [ConfigService],
    }),
    UsersModule,
  ], //any module use module
  controllers: [],
  providers: [],
})
export class AppModule {}
