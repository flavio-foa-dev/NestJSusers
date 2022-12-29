import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from '../users.service';
@Injectable()
@ValidatorConstraint({ async: true })
export class IsUserAlreadyExistValidation
  implements ValidatorConstraintInterface
{
  constructor(private userService: UsersService) {}

  async validate(
    userName: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const user = await this.userService.getUserByName(userName);
    return !!!user;
  }
}

export const IsUserAlreadyExist = (validationOptions?: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserAlreadyExistValidation,
    });
  };
};
