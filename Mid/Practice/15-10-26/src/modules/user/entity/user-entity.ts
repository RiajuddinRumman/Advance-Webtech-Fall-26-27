import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity({name: "users"})

export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string = "";

    @Column({type: "varchar", length: 255})
    name: string ="";

    @Column({type: "varchar", length: 255, unique: true})
    email: string = "";

    @Column({type: "varchar", length: 255, select:false})
    password!: string;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt?: Date = new Date();
    
    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt?: Date = new Date();
}