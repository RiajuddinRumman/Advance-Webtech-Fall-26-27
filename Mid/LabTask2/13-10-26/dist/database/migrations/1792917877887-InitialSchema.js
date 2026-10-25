"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1792917877887 = void 0;
class InitialSchema1792917877887 {
    constructor() {
        this.name = 'InitialSchema1792917877887';
    }
    async up(queryRunner) {
        if (!(await queryRunner.hasTable("marketplaces"))) {
            await queryRunner.query(`CREATE TABLE "marketplaces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_e4d5b8aa6ae255c4ce370792f79" PRIMARY KEY ("id"))`);
        }
        if (!(await queryRunner.hasTable("lostandfounds"))) {
            await queryRunner.query(`CREATE TABLE "lostandfounds" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_91f0d4270b68a4986377c9ba426" PRIMARY KEY ("id"))`);
        }
    }
    async down(queryRunner) {
        if (await queryRunner.hasTable("lostandfounds")) {
            await queryRunner.query(`DROP TABLE "lostandfounds"`);
        }
        if (await queryRunner.hasTable("marketplaces")) {
            await queryRunner.query(`DROP TABLE "marketplaces"`);
        }
    }
}
exports.InitialSchema1792917877887 = InitialSchema1792917877887;
//# sourceMappingURL=1792917877887-InitialSchema.js.map