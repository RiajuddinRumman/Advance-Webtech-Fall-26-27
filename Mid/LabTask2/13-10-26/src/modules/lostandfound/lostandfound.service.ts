import { Injectable, Optional } from '@nestjs/common';
import { CreateLostandfoundDto } from './dto/create-lostandfound.dto';
import { UpdateLostandfoundDto } from './dto/update-lostandfound.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Lostandfound } from './entities/lostandfound.entity';

@Injectable()
export class LostandfoundService {
  constructor(@Optional() @InjectRepository(Lostandfound) private userRepository?: Repository<Lostandfound>) {}
  async create(createLostandfoundDto: CreateLostandfoundDto) {
    try{
      const user = this.userRepository!.create(createLostandfoundDto);
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

  async update(id: string, updateLostandfoundDto: UpdateLostandfoundDto) {
    try{
      const employee = await this.userRepository!.findOneBy({ id });
      if (!employee) {
        throw new Error(`Lostandfound with ID ${id} not found`);
      }
      Object.assign(employee, updateLostandfoundDto);
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

export { LostandfoundService as LostandfoundsService };

