"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1792917877888 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsers1792917877888 {
    constructor() {
        this.name = "CreateUsers1792917877888";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    default: "gen_random_uuid()",
                },
                {
                    name: "full_name",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "age",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "phone",
                    type: "varchar",
                    length: "11",
                    isNullable: false,
                },
                {
                    name: "account_type",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "address",
                    type: "varchar",
                    isNullable: true,
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUsers1792917877888 = CreateUsers1792917877888;
//# sourceMappingURL=1792917877888-CreateUsers.js.map