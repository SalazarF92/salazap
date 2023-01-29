import { Injectable } from '@nestjs/common';
import { IMessage, MessagesRepository } from './messages.repository';
import { Message } from './messages.entity';

interface SendMessageRequest {
  content: IMessage;
}

interface SendMessageResponse {
  message: Message;
}

@Injectable()
export class MessageService {
  constructor(private messagesRepository: MessagesRepository) {}
  async send(request: any): Promise<SendMessageResponse> {
    const message: any = null;
    console.log(`Sending message: ${request}`);
    await this.messagesRepository.create(request.content);

    return message;
  }
}
