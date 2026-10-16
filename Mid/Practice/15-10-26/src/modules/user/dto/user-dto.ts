import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name : string = "";

    @IsNotEmpty()
    @IsEmail()
    email : string = "";

    @IsNotEmpty()
    @MinLength(6)
    password : string = "";

    @IsOptional()
    createdAt? : Date = new Date();

    @IsOptional()
    updatedAt? : Date = new Date();

}

export class UpdateUserDto{
    @IsNotEmpty()
    @IsString()
    name : string = "";

    @IsNotEmpty()
    @IsString()
    email : string = "";

    @IsNotEmpty()
    @MinLength(6)
    password : string = "";

    @IsOptional()
    createdAt? : Date = new Date();

    @IsOptional()
    updatedAt? : Date = new Date();

}