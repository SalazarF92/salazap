import { UsersService } from '@/app/users/users.service';
import { DatabaseModule } from '@/infra/database/database.module';
import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class HttpModule {}
