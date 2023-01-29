import { Module } from '@nestjs/common';
import { RabbitServiceConsumer } from './rabbitmq/rabbit.service';
import { DatabaseModule } from '../database/database.module';
import { MessagesController } from './controller/messages.controller';
import { MessageService } from '@/app/messages/messages.service';
import { MessagesRepository } from '@/app/messages/messages.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  // imports: [ClientsModule.register([RabbitServiceConsumer])],
  providers: [RabbitServiceConsumer],
  controllers: [MessagesController],
})
export class QueueModule {}
