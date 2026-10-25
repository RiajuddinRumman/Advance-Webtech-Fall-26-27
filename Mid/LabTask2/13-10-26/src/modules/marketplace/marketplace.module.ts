import { Module } from '@nestjs/common';
import { MarketplacesService } from './marketplace.service';
import { MarketplaceController } from './marketplace.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marketplace } from './entities/marketplace.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Marketplace])],
  controllers: [MarketplaceController],
  providers: [MarketplacesService],
})
export class MarketplaceModule {}
