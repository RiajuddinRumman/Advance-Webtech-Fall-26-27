import { IsOptional, IsString, MinLength } from 'class-validator';
export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @MinLength(6)
    password?: string;

    @IsOptional()
    createdAt?: Date;

    @IsOptional()
    updatedAt?: Date;
}