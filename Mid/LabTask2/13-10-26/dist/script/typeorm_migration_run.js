"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../config");
const typeorm_1 = require("typeorm");
const migrateRun = async () => {
    console.log(`Migrating.....`);
    const ds = new typeorm_1.DataSource({
        ..._1.dataSourceOptions,
    });
    try {
        await ds.initialize();
        await ds.runMigrations();
        console.log("migration completed");
    }
    catch (err) {
        console.error("migration failed", err);
        process.exitCode = 1;
    }
    finally {
        if (ds.isInitialized)
            await ds.destroy();
    }
};
migrateRun().catch((err) => {
    console.error("migration failed", err);
    process.exitCode = 1;
});
//# sourceMappingURL=typeorm_migration_run.js.map