import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1792917877887 implements MigrationInterface {
    name = 'InitialSchema1792917877887'

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (!(await queryRunner.hasTable("marketplaces"))) {
            await queryRunner.query(`CREATE TABLE "marketplaces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_e4d5b8aa6ae255c4ce370792f79" PRIMARY KEY ("id"))`);
        }
        if (!(await queryRunner.hasTable("lostandfounds"))) {
            await queryRunner.query(`CREATE TABLE "lostandfounds" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_91f0d4270b68a4986377c9ba426" PRIMARY KEY ("id"))`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        if (await queryRunner.hasTable("lostandfounds")) {
            await queryRunner.query(`DROP TABLE "lostandfounds"`);
        }
        if (await queryRunner.hasTable("marketplaces")) {
            await queryRunner.query(`DROP TABLE "marketplaces"`);
        }
    }

}
