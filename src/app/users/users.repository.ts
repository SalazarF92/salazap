// create abstract class for User with CRUD methods

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export abstract class UserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<any>;
  abstract findAll(): Promise<void>;
  abstract findOneByEmail(email: string): Promise<any>;
  abstract update(id: string, updateUserDto: UpdateUserDto): Promise<void>;
  abstract delete(where: any): Promise<boolean>;
}
