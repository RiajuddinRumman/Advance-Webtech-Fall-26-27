import { MigrationInterface, QueryRunner, Table } from "typeorm";


export class CreateProductTable1775500022201 implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"products",
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
                            name:"category",
                            type:"varchar",
                            isNullable:false,
                        },
                         {
                            name:"price",
                            type:"numeric",
                            isNullable:false,
                        },
                        
                         {
                            name:"quantity",
                            type:"int",
                            isNullable:false,
                        },

                    ],
                } ),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }
}