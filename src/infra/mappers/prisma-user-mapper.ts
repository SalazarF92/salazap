import { User } from '@/app/users/user.entity';

export class PrismaUserMapper {
  static toPrisma(prismaUser: User) {
    return {
      name: prismaUser.name,
      email: prismaUser.email,
      password: prismaUser.password,
    };
  }

  static toHttp(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
