import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name:string = "";

    @IsNotEmpty()
    @IsEmail()
    email:string = "";

    @IsNotEmpty()
    @IsStrongPassword()
    password:string = "";

    @IsOptional()
    @IsDate()
    createdAt?: Date = new Date();
    
    @IsOptional()
    @IsDate()
    updatedAt?: Date = new Date();
}
