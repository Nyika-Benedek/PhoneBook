import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { resourceUsage } from 'process';
import { Observable } from 'rxjs';
import { PhoneBook } from './modell/phone-book.interface';
import { PhoneBookService } from './phone-book.service';

@Controller('phones')
export class PhoneBookController {

    constructor(private phoneBookService: PhoneBookService) { }

    @Post()
    create(@Body()phoneBook: PhoneBook): Observable<PhoneBook> {
        return this.phoneBookService.create(phoneBook);
    }

    @Get(':id')
    findOne(@Param()params): Observable<PhoneBook> {
        return this.phoneBookService.findOne(params.id);
    }

    @Get()
    findAll():Observable<PhoneBook[]> {
        return this.phoneBookService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<PhoneBook> {
        return this.phoneBookService.deleteOne(Number(id))
    }

    @Put(':id')
    updateOne(@Param('id')id: string, @Body() phoneBook: PhoneBook): Observable<any> {
        return this.phoneBookService.updateOne(Number(id), phoneBook)
    }

}
