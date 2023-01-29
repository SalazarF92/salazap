export interface IMessage {
  id: string;
  userId: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class MessagesRepository {
  abstract create(message: IMessage): Promise<void>;
  abstract save(message: IMessage): Promise<void>;
  abstract find(): Promise<IMessage[]>;
  abstract findOne(id: string): Promise<IMessage>;
  abstract delete(id: string): Promise<void>;
  abstract findByName(name: string): Promise<IMessage>;
}
