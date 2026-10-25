import { LostandfoundService } from './lostandfound.service';
import { CreateLostandfoundDto } from './dto/create-lostandfound.dto';
import { UpdateLostandfoundDto } from './dto/update-lostandfound.dto';
export declare class LostandfoundController {
    private readonly lostandfoundService;
    constructor(lostandfoundService: LostandfoundService);
    create(createLostandfoundDto: CreateLostandfoundDto): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
    update(id: string, updateLostandfoundDto: UpdateLostandfoundDto): Promise<unknown>;
    remove(id: string): Promise<unknown>;
}
