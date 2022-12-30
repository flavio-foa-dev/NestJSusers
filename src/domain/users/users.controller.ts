import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { UserEntity } from './dto/user.entity';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  public async create(@Body() user: UserEntity): Promise<UserEntity> {
    const userCreated = await this.userService.create(user);
    return userCreated;
  }

  @Get()
  public async getUsersAll(): Promise<UserEntity[]> {
    const users = await this.userService.getUsersAll();
    if (!users.length) {
      throw new NotFoundException();
    }
    return users;
  }

  @Get('/:name')
  public async getUserByName(@Param('name') name: string): Promise<UserEntity> {
    const user = await this.userService.getUserByName(name);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
