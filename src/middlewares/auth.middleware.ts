import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private ConfigService: ConfigService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const bearerToken = req.headers['authorization'];
    if (!bearerToken) {
      throw new UnauthorizedException('You need sign in first');
    }
    const [_, token] = bearerToken.split(' ');
    const payload = jwt.verify(
      token,
      this.ConfigService.getOrThrow<string>('SECRET_KEY'),
    );

    req['user'] = payload;
    next();
  }
}
