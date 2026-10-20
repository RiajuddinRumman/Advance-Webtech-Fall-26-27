import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm/repository/Repository.js';

@Injectable()
export class EmployeesService {
  constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    try{
      const employee = this.employeeRepository.create(createEmployeeDto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      return await error;
    }
  }

  async findAll() {
    try{
      return this.employeeRepository.find();
    }
    catch(error){
      return await error;
    }
  }

  async findOne(id: string) {
    try{
      return this.employeeRepository.findOneBy({ id });
    }
    catch(error){
      return await error;
    }
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    try{
      const employee = await this.employeeRepository.findOneBy({ id });
      if (!employee) {
        throw new Error(`Employee with ID ${id} not found`);
      }
      Object.assign(employee, updateEmployeeDto);
      return await this.employeeRepository.save(employee);
    }
    catch(error){
      return await error;
    }
  }

  async remove(id: string) {
    try{
      const employee = await this.employeeRepository.findOneBy({ id });
      if (!employee) {
        throw new Error(`Employee with ID ${id} not found`);
      }
      return await this.employeeRepository.remove(employee);
    }
    catch(error){
      return await error;
    }
  }
}
