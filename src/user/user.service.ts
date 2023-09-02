import { Injectable, Res, Req, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response, Request } from 'express';
import { Model } from 'mongoose';
import { User } from 'src/interface/user.interface';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModal: Model<User>) {}

  async onCreate(user: User) {
    console.log('user', user);
    const createUser = await this.userModal.create({
      ...user,
    });

    return createUser;
  }
}
