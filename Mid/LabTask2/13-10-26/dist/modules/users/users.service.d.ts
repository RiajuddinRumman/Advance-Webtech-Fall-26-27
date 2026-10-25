import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepository?;
    constructor(userRepository?: Repository<User> | undefined);
    create(createUserDto: CreateUserDto): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<unknown>;
    remove(id: string): Promise<unknown>;
}
