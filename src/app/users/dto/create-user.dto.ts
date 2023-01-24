import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  @Length(3, 20, { message: 'Name must be between 3 and 20 characters' })
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Email type is invalid' })
  email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number',
  })
  password: string;
}
