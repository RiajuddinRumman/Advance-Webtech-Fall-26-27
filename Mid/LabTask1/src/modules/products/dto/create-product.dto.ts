import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    category!: string;

    @IsNotEmpty()
    @IsNumber()
    price!: number;

    @IsNotEmpty()
    @IsNumber()
    quantity!: number;
}
