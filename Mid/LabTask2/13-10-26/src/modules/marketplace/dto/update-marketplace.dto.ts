import { IsNotEmpty, IsString } from "class-validator";

export class UpdateMarketplaceDto {
    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsNotEmpty()
    @IsString()
    description!:string;

    @IsNotEmpty()
    price!: number;
}
