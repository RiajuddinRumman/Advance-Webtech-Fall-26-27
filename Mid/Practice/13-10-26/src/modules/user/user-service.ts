import { Injectable,NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm/repository/Repository.js";
import { User } from "./entities/user-entity";
import { CreateUserDto, UpdateUserDto } from "./dto/user-dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, 
) {}

async getUsers(){
    try{
        const users = await this.userRepository.find();
        return users;
    }
    

    catch (error) {
        
        throw error;
    }
}


async createUser(dto: CreateUserDto){
    try{
        const response = await this.userRepository.create(dto);
        return await this.userRepository.save(response);
    }
    catch (error) {
        throw error;
    }
}

async updateUser(id: string, dto: UpdateUserDto){
    try{
        console.log("id", id);
        if(!id){
            throw new NotFoundException("User not found");
        }

        const user = await this.userRepository.findOneBy({id: id});
        if(!user){
            throw new NotFoundException("User not found");
        }

        Object.assign(user, dto);
        const{id:uuid, ...updateData} = user;
        return await this.userRepository.update({id:id}, updateData);
    }
    catch (error) {
        throw error;
    }
}

async deleteUser(id: string){
    try{
        if(!id){
            throw new NotFoundException("User not found");
        }
        
        const user = await this.userRepository.findOneBy({id: id});
        if(!user){
            throw new NotFoundException("User not found");
        }

        return await this.userRepository.delete({id:id});
    }
    catch (error) {
        throw error;
    }

}

}