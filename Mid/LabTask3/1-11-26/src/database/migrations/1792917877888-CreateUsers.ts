import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1792917877888 implements MigrationInterface {
  name = "CreateUsers1792917877888";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "full_name" character varying NOT NULL,
        "email" character varying NOT NULL,
        "password" character varying NOT NULL,
        "age" integer NOT NULL,
        "phone" character varying(11) NOT NULL,
        "account_type" character varying NOT NULL,
        "address" character varying,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_users_email" UNIQUE ("email"),
        CONSTRAINT "PK_users_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
