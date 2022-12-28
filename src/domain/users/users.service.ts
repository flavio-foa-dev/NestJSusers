import { Injectable } from '@nestjs/common';

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
}
