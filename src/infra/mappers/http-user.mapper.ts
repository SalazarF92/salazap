import { User } from '@/app/users/entities/user.entity';

export class HttpUserMapper {
  static toHttp(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
