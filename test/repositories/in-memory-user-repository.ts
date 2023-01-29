import { UpdateUserDto } from '@/app/users/dto/update-user.dto';
import { User } from '@/app/users/user.entity';
import { UserRepository } from '@/app/users/users.repository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<any> {
    this.users.push(user);
    return this.users;
  }

  async findAll(): Promise<void> {}

  async findOneByEmail(email: string): Promise<void> {}

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {}

  async delete(where: any): Promise<boolean> {
    return true;
  }
}
