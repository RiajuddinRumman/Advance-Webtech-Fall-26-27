"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1792917877888 = void 0;
class CreateUsers1792917877888 {
    constructor() {
        this.name = "CreateUsers1792917877888";
    }
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateUsers1792917877888 = CreateUsers1792917877888;
//# sourceMappingURL=1792917877888-CreateUsers.js.map