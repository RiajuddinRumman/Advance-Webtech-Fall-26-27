import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm";
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  fullName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  age!: number;

  @Column({ length: 11 })
  phone!: string;

  @Column()
  accountType!: string;

  @Column({ nullable: true })
  address?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
