import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user-controller";
import { UserService } from "./user-service";
import { User } from "./entity/user-entity";

@Module({
    // Import the TypeORM module with the User entity
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})

export class UserModule {}