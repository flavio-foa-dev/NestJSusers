import { Exclude, Expose } from 'class-transformer';
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
  @Expose({ name: 'userEmail' })
  email: string;

  @Exclude({ toPlainOnly: true })
  @IsNotEmpty()
  password: string;
}
