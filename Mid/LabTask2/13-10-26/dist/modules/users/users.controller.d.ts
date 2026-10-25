import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<unknown>;
    remove(id: string): Promise<unknown>;
}
