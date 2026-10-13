import { Column, CreateDateColumn, Entity,UpdateDateColumn ,PrimaryGeneratedColumn, } from "typeorm";

@Entity({name: "users"})
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string = "";

    @Column({type: "varchar", length: 255})
    name: string ="";

    @Column({type: "varchar", length: 255, unique: true})
    email: string = "";

    @Column({type: "varchar", length: 255})
    password!: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt?: Date = new Date();

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt?: Date = new Date();
}