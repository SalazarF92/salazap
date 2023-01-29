import { DSN_RABBIT } from '@/settings';
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ClientRMQ, ServerRMQ, Transport } from '@nestjs/microservices';
import { Connection, Channel, connect } from 'amqplib';

@Injectable()
export class RabbitServiceConsumer
  extends ServerRMQ
  implements OnModuleDestroy
{
  constructor() {
    super({
      urls: [process.env.DSN_RABBIT],
      queue: 'zaps1',
      queueOptions: {
        durable: false,
      },
    });
  }
  async onModuleDestroy() {
    this.close();
  }
}
