import { IsNotEmpty, IsString } from "class-validator";

export class UpdateLostandfoundDto {
    @IsNotEmpty()
        @IsString()
        title!: string;
    
        @IsNotEmpty()
        @IsString()
        description!:string;
    
        @IsNotEmpty()
        price!: number;
}
