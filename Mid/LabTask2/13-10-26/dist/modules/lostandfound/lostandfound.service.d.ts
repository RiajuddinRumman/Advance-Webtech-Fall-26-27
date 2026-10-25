import { CreateLostandfoundDto } from './dto/create-lostandfound.dto';
import { UpdateLostandfoundDto } from './dto/update-lostandfound.dto';
import { Repository } from 'typeorm';
import { Lostandfound } from './entities/lostandfound.entity';
export declare class LostandfoundService {
    private userRepository?;
    constructor(userRepository?: Repository<Lostandfound> | undefined);
    create(createLostandfoundDto: CreateLostandfoundDto): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
    update(id: string, updateLostandfoundDto: UpdateLostandfoundDto): Promise<unknown>;
    remove(id: string): Promise<unknown>;
}
export { LostandfoundService as LostandfoundsService };
