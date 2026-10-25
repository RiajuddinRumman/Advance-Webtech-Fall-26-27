import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marketplace {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column("numeric")
    price!: number;
}
