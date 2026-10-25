import { CreateMarketplaceDto } from './dto/create-marketplace.dto';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { Repository } from 'typeorm';
import { Marketplace } from './entities/marketplace.entity';
export declare class MarketplaceService {
    private userRepository?;
    constructor(userRepository?: Repository<Marketplace> | undefined);
    create(createMarketplaceDto: CreateMarketplaceDto): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
    update(id: string, updateMarketplaceDto: UpdateMarketplaceDto): Promise<unknown>;
    remove(id: string): Promise<unknown>;
}
export { MarketplaceService as MarketplacesService };
