import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitialSchema1792917877887 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
