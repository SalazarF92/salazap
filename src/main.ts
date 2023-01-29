import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ValidationPipe } from './helpers/ValidationPipe';
import { RabbitServiceConsumer } from './infra/queue/rabbitmq/rabbit.service';

async function bootstrap() {
  const nest = NestFactory;
  const app = await nest.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const rabbitConsumerService = app.get(RabbitServiceConsumer);
  app.connectMicroservice<MicroserviceOptions>({
    strategy: rabbitConsumerService,
  });
  await app.startAllMicroservices();
  console.log('Microservice is listening...');

  await app.listen(3000);
}
bootstrap();
