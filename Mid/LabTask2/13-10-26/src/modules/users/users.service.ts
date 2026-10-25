import { Injectable, Optional } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(@Optional() @InjectRepository(User) private userRepository?: Repository<User>) {}
  async create(createUserDto: CreateUserDto) {
    try{
      const user = this.userRepository!.create(createUserDto);
      return await this.userRepository!.save(user);
    }
    catch (error) {
      return await error;
    }
  }

  async findAll() {
    try{
      return await this.userRepository!.find();
    }
    catch (error) {
      return await error;
    }
  }

  async findOne(id: string) {
    try{
      return await this.userRepository!.findOneBy({ id });
    }
    catch(error){
      return await error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try{
      const employee = await this.userRepository!.findOneBy({ id });
      if (!employee) {
        throw new Error(`User with ID ${id} not found`);
      }
      Object.assign(employee, updateUserDto);
      return await this.userRepository!.save(employee);
    }
    catch(error){
      return await error;
    }
  }

  async remove(id: string) {
    try{
      const employee = await this.userRepository!.findOneBy({ id });
      if (!employee) {
        throw new Error(`Employee with ID ${id} not found`);
      }
      return await this.userRepository!.remove(employee);
    }
    catch(error){
      return await error;
    }
}
}
