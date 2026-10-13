import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateItems1760223600000 implements MigrationInterface {
  name = "CreateItems1760223600000";

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "items",
        columns: [
          {
            name: "id",
            type: "serial",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            length: "120",
          },
          {
            name: "description",
            type: "text",
            isNullable: true,
          },
          {
            name: "price",
            type: "numeric",
            precision: 10,
            scale: 2,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
      true,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("items");
  }
}
