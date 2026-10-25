import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LostandfoundService } from './lostandfound.service';
import { CreateLostandfoundDto } from './dto/create-lostandfound.dto';
import { UpdateLostandfoundDto } from './dto/update-lostandfound.dto';

@Controller('lostandfound')
export class LostandfoundController {
  constructor(private readonly lostandfoundService: LostandfoundService) {}

  @Post()
  create(@Body() createLostandfoundDto: CreateLostandfoundDto) {
    return this.lostandfoundService.create(createLostandfoundDto);
  }

  @Get()
  findAll() {
    return this.lostandfoundService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lostandfoundService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLostandfoundDto: UpdateLostandfoundDto) {
    return this.lostandfoundService.update(id, updateLostandfoundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lostandfoundService.remove(id);
  }
}
