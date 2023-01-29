import { BaseProps } from '@/types/interfaces';
import { randomUUID } from 'crypto';

export class Base {
  public props: BaseProps;
  private _id: string;
  constructor(props: BaseProps) {
    (this._id = props.id ?? randomUUID()),
      (this.props = {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
        deletedAt: props.deletedAt ?? new Date(),
      });
  }

  public get id(): string {
    return this._id;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get deletedAt(): Date {
    return this.props.deletedAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public get deleted(): boolean {
    return this.props.deleted;
  }

  public set deleted(value: boolean) {
    this.props.deleted = value;
  }

  public get active(): boolean {
    return this.props.active;
  }

  public set active(value: boolean) {
    this.props.active = value;
  }
}
