import { Test, TestingModule } from '@nestjs/testing';
import { PhoneBookService } from './phone-book.service';

describe('PhoneBookService', () => {
  let service: PhoneBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhoneBookService],
    }).compile();

    service = module.get<PhoneBookService>(PhoneBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
