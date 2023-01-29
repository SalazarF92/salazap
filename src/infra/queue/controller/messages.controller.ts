import { MessageService } from '@/app/messages/messages.service';
import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

interface MessageContentPayload {
  id: string;
  content: string;
}

@Controller()
export class MessagesController {
  // constructor(private readonly sendMessage: MessageService) {}
  @MessagePattern()
  async handleSendMessage(
    @Payload() data: number[],
    @Ctx() context: RmqContext,
  ) {
    // await this.sendMessage.send(data);
    console.log('Received message: ', data);
  }
}
