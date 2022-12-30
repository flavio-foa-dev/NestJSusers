import { Injectable } from '@nestjs/common';
import { UserEntity } from './dto/user.entity';

@Injectable()
export class UsersService {
  private users = [];

  public async create(user: any) {
    this.users.push(user);
    return user;
  }

  public async getUsersAll() {
    return this.users;
  }

  public async getUserByName(name: string): Promise<UserEntity> {
    return this.users.find((user) => user.userName === name);
  }
}
