import { IsEmail, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Matches, Max, Min, MinLength,} from "class-validator";
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  fullName!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/, {
    message:
      "password must contain uppercase, lowercase, number, and special character",
  })
  password!: string;

  @IsNotEmpty()
  @IsInt()
  @Min(18)
  @Max(60)
  age!: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^01\d{9}$/, {
    message: "phone must be exactly 11 digits and start with 01",
  })
  phone!: string;

  @IsNotEmpty()
  @IsIn(["student", "teacher"])
  accountType!: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  address?: string;
}
