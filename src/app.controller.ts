import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './interface/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async PostHello(@Body() data: User): Promise<string> {
    console.log('checking', data);

    return this.appService.PostHello(data);
  }
}
