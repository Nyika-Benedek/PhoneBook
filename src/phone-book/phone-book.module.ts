import { Global, Module } from '@nestjs/common';
import { PhoneBookService } from './phone-book.service';
import { PhoneBookController } from './phone-book.controller';
import { PhoneBookEntity } from './modell/phone-book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Global()
@Module({
  imports: [TypeOrmModule.forFeature([PhoneBookEntity])],
  providers: [PhoneBookService],
  controllers: [PhoneBookController],
})
export class PhoneBookModule {}
