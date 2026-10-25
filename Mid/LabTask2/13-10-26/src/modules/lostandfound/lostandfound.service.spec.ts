import { Test, TestingModule } from '@nestjs/testing';
import { LostandfoundService } from './lostandfound.service';

describe('LostandfoundService', () => {
  let service: LostandfoundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LostandfoundService],
    }).compile();

    service = module.get<LostandfoundService>(LostandfoundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
