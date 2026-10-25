import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Marketplace {
    @PrimaryGeneratedColumn()
    id!:string;

    @Column()
    title!:string;

    @Column()
    description!:string;

    @Column()
    price!:number;
}
