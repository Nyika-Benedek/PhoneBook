import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PhoneBookEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column( {unique: true} )
    phoneNum: number;

    @Column()
    email?: string; //? = optional
}