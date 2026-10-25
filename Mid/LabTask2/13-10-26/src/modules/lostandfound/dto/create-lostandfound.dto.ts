import { IsNotEmpty, IsString } from "class-validator";

export class CreateLostandfoundDto {
    @IsNotEmpty()
        @IsString()
        title!: string;
    
        @IsNotEmpty()
        @IsString()
        description!:string;
    
        @IsNotEmpty()
        price!: number;
}
