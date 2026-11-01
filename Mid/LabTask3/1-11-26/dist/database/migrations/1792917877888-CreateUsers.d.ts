import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUsers1792917877888 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
