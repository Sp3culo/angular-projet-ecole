import { Test, TestingModule } from '@nestjs/testing';
import { GeneralKnwoledgeController } from './general-knwoledge.controller';

describe('GeneralKnwoledgeController', () => {
  let controller: GeneralKnwoledgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralKnwoledgeController],
    }).compile();

    controller = module.get<GeneralKnwoledgeController>(GeneralKnwoledgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
