import { IsNumber, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class CreateItemDto {
  @IsString()
  @MaxLength(120)
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @Min(0)
  price!: number;
}
