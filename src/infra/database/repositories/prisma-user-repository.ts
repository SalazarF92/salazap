import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UserRepository } from '@/app/users/users.repository';
import { UpdateUserDto } from '@/app/users/dto/update-user.dto';
import { User } from '@/app/users/user.entity';
import { UserProps } from '@/types/interfaces';
import { Replace } from '@/helpers/Replace';
import { PrismaUserMapper } from '@/infra/mappers/prisma-user-mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: User): Promise<Partial<User>> {
    const raw = PrismaUserMapper.toPrisma(data);

    const user = await this.prisma.user.create({
      data: raw,
    });

    return PrismaUserMapper.toHttp(user as User);
  }

  async findAll(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findOneByEmail(email: string): Promise<any> {
    const result = await this.prisma.user.findFirst({
      where: { email },
    });
    return result;
  }

  async update(id: string, payload: UpdateUserDto): Promise<any> {
    return this.prisma.user.update({
      where: { id },
      data: payload,
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput) {
    await this.prisma.user.delete({
      where,
    });

    return true;
  }
}
