import { InMemoryUserRepository } from 'test/repositories/in-memory-user-repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  const userRepository = new InMemoryUserRepository();
  const userService = new UsersService(userRepository);

  it('should create User', async () => {
    const newUser = {
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '123456Aa',
    };
    const user = await userService.create(newUser);
    expect(typeof user).toBe('object');
    expect(user[0].name.length).toBeGreaterThanOrEqual(3);
    expect(newUser.password).toMatch(/^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
  });

  it('should create accessToken', async () => {
    async () => {
      const newUser = {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: '123456Aa',
      };

      const user = await userService.create(newUser);

      const accessToken = await userService.generateSessionToken(user);

      expect(typeof accessToken).toBe('string');
    };
  });
});
