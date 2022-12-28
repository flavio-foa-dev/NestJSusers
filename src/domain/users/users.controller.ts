import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  public async create(@Body() user) {
    await this.userService.create(user);
    return user;
  }

  @Get()
  public async getUsersAll() {
    return this.userService.getUsersAll();
  }
}
