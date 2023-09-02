import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/interface/user.interface';

import { Response } from 'express';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('addingUser')
  async PostUser(@Body() user: User, @Res() response: Response) {
    console.log(user);
    const result = await this.userService.onCreate(user);

    response.json({ message: 'successfully', result });
  }
}
