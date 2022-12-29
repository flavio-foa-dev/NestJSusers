import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserAlreadyExist } from '../validations/is-name-unique';

export class UserEntity {
  id?: number;

  @IsNotEmpty()
  @IsString()
  @IsUserAlreadyExist({ message: 'name already exists' })
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
