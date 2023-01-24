import { DSN_RABBIT } from './settings';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ValidationPipe } from './helpers/ValidationPipe';

async function bootstrap() {
  const nest = NestFactory;
  const app = await nest.create(AppModule);
  const rabbit = await nest.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.DSN_RABBIT],
      queue: 'zaps',
      queueOptions: {
        durable: false,
      },
    },
  });
  await rabbit.listen().then(() => console.log('Microservice is listening'));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
