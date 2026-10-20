import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
    
@Entity({name: 'employees'})
export class Employee {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!:string;

    @Column()
    email!:string;

    @Column()
    phone!:string;

    @Column()
    password!:string;

    @Column()
    age!:number;

    @Column({ name: "yearsOfExperience" })
    yearsOfExperience!:number;


}
