import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    email!: string;

    @IsNotEmpty()
    @IsString()
    phone!: string;

    @IsNotEmpty()
    @IsString()
    password!: string;

    @IsNotEmpty()
    @IsNumber()
    age!: number;

    @IsNotEmpty()
    @IsNumber()
    yearsOfExperience!: number;
}
