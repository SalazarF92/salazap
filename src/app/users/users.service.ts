import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { compareSync, hashSync } from 'bcrypt';
import { UserRepository } from './users.repository';
import { UserProps } from '@/types/interfaces';
import { User } from './user.entity';
import { HttpError } from '@/error/ErrorHandler';
import { createSecretKey } from 'crypto';
import { JWT_SECRET } from '@/settings';
import jose from 'jose';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  async create({
    name,
    email,
    password,
  }: CreateUserDto): Promise<Partial<UserProps>> {
    const alreadyExists = await this.userRepository.findOneByEmail(email);

    if (alreadyExists) {
      new HttpError(400, 'User already exists').throwError();
    }

    const hashedPassword = hashSync(password, 12 + 1);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user as Promise<User>;
  }

  async login({ email, password }: UserProps): Promise<string> {
    const user = await this.userRepository.findOneByEmail(email);

    if (!user) new HttpError(400, 'User not found').throwError();

    const passwordMatch = compareSync(password, user.password);

    if (!passwordMatch) new HttpError(400, 'Invalid password').throwError();

    const sessionToken = this.generateSessionToken(user);

    return sessionToken as Promise<string>;
  }

  public async generateSessionToken(payload: any) {
    const token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(createSecretKey(JWT_SECRET, 'utf-8'));

    return token;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
