import { Module } from '@nestjs/common';
import { PhoneBookService } from './phone-book.service';
import { PhoneBookController } from './phone-book.controller';

@Module({
  providers: [PhoneBookService],
  controllers: [PhoneBookController]
})
export class PhoneBookModule {}
