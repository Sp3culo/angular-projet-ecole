import { Test, TestingModule } from '@nestjs/testing';
import { GeneralKnwoledgeService } from './general-knwoledge.service';

describe('GeneralKnwoledgeService', () => {
  let service: GeneralKnwoledgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralKnwoledgeService],
    }).compile();

    service = module.get<GeneralKnwoledgeService>(GeneralKnwoledgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
