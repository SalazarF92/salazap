import { InMemoryUserRepository } from 'test/repositories/in-memory-user-repository';
import { UsersController } from '../../infra/http/controllers/users.controller';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('UsersController', () => {
  it('should create User', async () => {
    const userRepository = new InMemoryUserRepository();
    const userService = new UsersService(userRepository);

    const user = await userService.create({
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '123456Aa',
    });

    expect(user).toBeInstanceOf(User);
  });
});
