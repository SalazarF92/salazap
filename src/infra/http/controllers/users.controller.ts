import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from '@/app/users/users.service';
import { CreateUserDto } from '@/app/users/dto/create-user.dto';
import { UpdateUserDto } from '@/app/users/dto/update-user.dto';
import { HttpError } from '@/error/ErrorHandler';
import { User } from '@/app/users/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() data: CreateUserDto) {
    try {
      return this.usersService.create(data);
    } catch (error) {
      return new HttpError(error.statusCode, error.message).getError();
    }
  }

  @Post('login')
  login(@Body() data: User) {
    try {
      return this.usersService.login(data);
    } catch (error) {
      return new HttpError(error.statusCode, error.message).getError();
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
