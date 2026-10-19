import { MigrationInterface } from "typeorm/migration/MigrationInterface.js";

export class CreateUsersTable1792423320000 implements MigrationInterface {
    public async up(queryRunner: any): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: any): Promise<void> {
        await queryRunner.query(`DROP TABLE users;`);
    }
}