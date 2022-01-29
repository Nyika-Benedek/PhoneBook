import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { EntityRepository, Repository } from 'typeorm';
import { PhoneBookEntity } from '../modell/phone-book.entity';
import { PhoneBook } from '../modell/phone-book.interface';

@Injectable()
export class PhoneBookService {

    // create repository
    constructor(
        @InjectRepository(PhoneBookEntity) private readonly phoneBookRepository: Repository<PhoneBookEntity>
    ) {}

    // add new entry
    create(phoneBook: PhoneBook): Observable<PhoneBook> {
        //from is work like promis
        return from(this.phoneBookRepository.save(phoneBook));
    }

    // get all entry
    findAll(): Observable<PhoneBook[]> {
        return from(this.phoneBookRepository.find());
    }

    // get one entry by id
    findOne(id: number): Observable<PhoneBook> {
        return from(this.phoneBookRepository.findOne({id}));
    }

    // delete entry by ID
    deleteOne(id: number): Observable<any> {
        return from(this.phoneBookRepository.delete(id));
    }

    // update one whole entry by ID
    updateOne(id: number, phoneBook: PhoneBook): Observable<any> {
        return from(this.phoneBookRepository.update(id, phoneBook));
    }
}
