import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}
  async create(createProductDto: CreateProductDto) {
    try{
      const product = this.productRepository.create(createProductDto);
      return await this.productRepository.save(product);
    }
    catch(error){
      return await error;
    }
  }

  async findAll() {
    try{
      return this.productRepository.find();
    }
    catch(error){
      return await error;
    }
  }

  async findOne(id: string) {
    try{
      return this.productRepository.findOneBy({ id });
    }
    catch(error){
      return await error;
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try{
      const product = await this.productRepository.findOneBy({ id });
      if(!product){
        return `Product with id ${id} not found`;
      }
      this.productRepository.merge(product, updateProductDto);
      return await this.productRepository.save(product);
    }
    catch(error){
      return await error;
    }
  }

  async remove(id: string) {
    try{
      return this.productRepository.delete({ id });
    }
    catch(error){
      return await error;
    }
  }
}
