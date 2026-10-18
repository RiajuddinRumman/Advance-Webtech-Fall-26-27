import { Body, Controller, Get, Post, Patch, Delete } from "@nestjs/common";
import { patch } from "axios";
import { UserService } from "./users.service";
import { CreateUserDto} from "./dto/create-user.dto";
import { UpdateUserDto} from "./dto/update-user.dto";
import { Param } from "@nestjs/common";
@Controller("users")
export class UserController {
  // Define your user-related endpoints here
  constructor(private readonly userService: UserService) {}

@Get()
async getUsers(){
    return await this.userService.getUsers();
}
@Post()
async createUser(@Body() dto : CreateUserDto){
    return await this.userService.createUser(dto);
}

@Patch(":id")
async updateUser(@Param("id") id:string, @Body() dto : UpdateUserDto){
    return await this.userService.updateUser(id, dto);
}

@Delete(":id")
async deleteUser(@Param("id") id:string){
    return await this.userService.deleteUser(id);
}

}