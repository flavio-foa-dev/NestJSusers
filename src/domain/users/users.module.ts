import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { IsUserAlreadyExistValidation } from './validations/is-name-unique';

@Module({
  controllers: [UsersController],
  providers: [UsersService, IsUserAlreadyExistValidation],
  imports: [],
})
export class UsersModule {}
