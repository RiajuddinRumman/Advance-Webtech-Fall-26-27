import { Injectable, Optional } from '@nestjs/common';
import { CreateMarketplaceDto } from './dto/create-marketplace.dto';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Marketplace } from './entities/marketplace.entity';

@Injectable()
export class MarketplaceService {
  constructor(@Optional() @InjectRepository(Marketplace) private userRepository?: Repository<Marketplace>) {}
  async create(createMarketplaceDto: CreateMarketplaceDto) {
    try{
      const user = this.userRepository!.create(createMarketplaceDto);
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

  async update(id: string, updateMarketplaceDto: UpdateMarketplaceDto) {
    try{
      const employee = await this.userRepository!.findOneBy({ id });
      if (!employee) {
        throw new Error(`Marketplace with ID ${id} not found`);
      }
      Object.assign(employee, updateMarketplaceDto);
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

export { MarketplaceService as MarketplacesService };

