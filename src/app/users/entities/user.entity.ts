import { UserProps } from '@/types/interfaces';
import { Base } from './base.entity';

export class User extends Base {
  public props: UserProps;
  constructor(props: UserProps) {
    super(props);
  }

  public get name(): string {
    return this.props.name;
  }
  public set name(value: string) {
    this.props.name = value;
  }
  public get password(): string {
    return this.props.password;
  }
  public set password(value: string) {
    this.props.password = value;
  }
  public get email(): string {
    return this.props.email;
  }
  public set email(value: string) {
    this.props.email = value;
  }
}

// const user = new User({
//   id: '1',
//   name: 'John Doe',
//   email: '1',
//   password: '123456',
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   deletedAt: new Date(),
//   deleted: false,
//   active: true,
// });
