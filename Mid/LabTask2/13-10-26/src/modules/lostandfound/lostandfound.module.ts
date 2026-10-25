import { Module } from '@nestjs/common';
import { LostandfoundsService } from './lostandfound.service';
import { LostandfoundController } from './lostandfound.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lostandfound } from './entities/lostandfound.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lostandfound])],
  controllers: [LostandfoundController],
  providers: [LostandfoundsService],
})
export class LostandfoundModule {}
