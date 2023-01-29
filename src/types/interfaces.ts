export interface BaseProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  deleted: boolean;
  active: boolean;
}

export interface MessageProps extends BaseProps {
  content: string;
  userId: string;
}

export interface UserProps extends BaseProps {
  id: string;
  name: string;
  email: string;
  password: string;
}
