import { IsNotEmpty, IsString, MinLength, IsOptional } from "class-validator";
export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name: string ="";

    @IsNotEmpty()
    @IsString()
    email: string="";

    @IsNotEmpty()
    @MinLength(6)
    password: string = "";

    @IsOptional()
    createdAt?: Date = new Date();

    @IsOptional()
    updatedAt?: Date = new Date();
}
