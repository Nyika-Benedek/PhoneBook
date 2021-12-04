import { Test, TestingModule } from '@nestjs/testing';
import { PhoneBookController } from './phone-book.controller';

describe('PhoneBookController', () => {
  let controller: PhoneBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneBookController],
    }).compile();

    controller = module.get<PhoneBookController>(PhoneBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
