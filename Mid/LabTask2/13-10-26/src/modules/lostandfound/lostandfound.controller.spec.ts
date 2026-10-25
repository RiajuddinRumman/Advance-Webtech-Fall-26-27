import { Test, TestingModule } from '@nestjs/testing';
import { LostandfoundController } from './lostandfound.controller';
import { LostandfoundService } from './lostandfound.service';

describe('LostandfoundController', () => {
  let controller: LostandfoundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LostandfoundController],
      providers: [LostandfoundService],
    }).compile();

    controller = module.get<LostandfoundController>(LostandfoundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
