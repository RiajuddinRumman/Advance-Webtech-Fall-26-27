import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lostandfound {
    @PrimaryGeneratedColumn()
    id!:string;

    @Column()
    title!:string;

    @Column()
    description!:string;

    @Column()
    price!:number;
}
