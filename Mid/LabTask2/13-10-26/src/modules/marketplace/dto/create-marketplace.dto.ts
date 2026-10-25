import { IsNotEmpty, IsString } from "class-validator";

export class CreateMarketplaceDto {
    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsNotEmpty()
    @IsString()
    description!:string;

    @IsNotEmpty()
    price!: number;
}
