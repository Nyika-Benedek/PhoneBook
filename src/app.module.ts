import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhoneBookModule } from './phone-book/phone-book.module';

@Module({
  imports: [PhoneBookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
