import { MessageProps, UserProps } from '@/types/interfaces';
import { Base } from '../entities/base.entity';

export class Message extends Base {
  public props: MessageProps;
  constructor(props: MessageProps) {
    super(props);
  }

  public get content(): string {
    return this.props.content;
  }
  public set content(value: string) {
    this.props.content = value;
  }
  public get userId(): string {
    return this.props.userId;
  }
  public set userId(value: string) {
    this.props.userId = value;
  }
}
