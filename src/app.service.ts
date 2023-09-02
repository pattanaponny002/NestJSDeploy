import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { Model } from 'mongoose';
@Injectable()
export class AppService {
  constructor(@InjectModel('User') private readonly userModal: Model<User>) {}
  getHello(): string {
    return 'Hello World!';
  }
  async PostHello(data: User): Promise<string> {
    console.log('DATA', data);

    const result = await this.userModal.create({
      ...data,
    });
    console.log('RESULT', result);
    return `Hello World! ${result.name}`;
  }
}
