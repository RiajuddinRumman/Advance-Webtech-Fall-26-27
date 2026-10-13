import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateItemDto } from "./dto/create-item.dto";
import { Item } from "./entities/item.entity";

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  create(createItemDto: CreateItemDto): Promise<Item> {
    const item = this.itemsRepository.create({
      ...createItemDto,
      description: createItemDto.description ?? null,
      price: createItemDto.price.toFixed(2),
    });

    return this.itemsRepository.save(item);
  }

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find({
      order: { id: "ASC" },
    });
  }
}
