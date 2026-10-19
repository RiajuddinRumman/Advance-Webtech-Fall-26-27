import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateChatDto {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  message!: string;
}
