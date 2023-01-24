import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ZAP_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'zaps',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class QueueModule {}
