import { IsEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsEmpty()
    @IsString()
    name : string = "";

    @IsEmpty()
    @IsString()
    email : string = "";

    @IsEmpty()
    @MinLength(6)
    password : string = "";

    @IsOptional()
    createdAt? : Date = new Date();

    @IsOptional()
    updatedAt? : Date = new Date();

}

export class UpdateUserDto{
    @IsEmpty()
    @IsString()
    name : string = "";

    @IsEmpty()
    @IsString()
    email : string = "";

    @IsEmpty()
    @MinLength(6)
    password : string = "";

    @IsOptional()
    createdAt? : Date = new Date();

    @IsOptional()
    updatedAt? : Date = new Date();

}