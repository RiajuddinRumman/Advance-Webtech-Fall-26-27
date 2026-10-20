import { MigrationInterface, QueryRunner, Table } from "typeorm";



export class CreateEmployeeoyeeTable1775500022201 implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"employees",
                    columns:[

                        {
                            name:"id",
                            type:"uuid",
                            isPrimary: true,
                            generationStrategy:"uuid",
                            default:"uuid_generate_v4()",
                        },
                        {
                            name:"name",
                            type:"varchar",
                            isNullable:false,
                        },
                        

                         {
                            name:"email",
                            type:"varchar",
                            isNullable:false,
                        },
                        {
                            name:"phone",
                            type:"varchar",
                            isNullable:false,
                        },
                         {
                            name:"password",
                            type:"varchar",
                            isNullable:false,
                        },
                         {
                            name:"age",
                            type:"int",
                            isNullable:false,
                        },
                         {
                            name:"yearsOfExperience",
                            type:"int",
                            isNullable:false,
                        },

                    ],
                } ),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employees");
    }
}