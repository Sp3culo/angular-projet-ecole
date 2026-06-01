import { Test, TestingModule } from '@nestjs/testing';
import { QAndAController } from './q-and-a.controller';
import { QAndAService } from './q-and-a.service';

describe('QAndAController', () => {
  let controller: QAndAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QAndAController],
      providers: [QAndAService],
    }).compile();

    controller = module.get<QAndAController>(QAndAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
