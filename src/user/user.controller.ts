import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/interface/user.interface';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('addingUser')
  async PostUser(@Body() user: User) {
    console.log(user);
    await this.userService.onCreate(user);
  }
}
