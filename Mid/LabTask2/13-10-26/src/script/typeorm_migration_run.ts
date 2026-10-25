import { dataSourceOptions } from "@/config/.";
import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const migrateRun = async () => {
  console.log(`Migrating.....`);
  const ds = new DataSource({
    ...dataSourceOptions,
  } as PostgresConnectionOptions);
  try {
    await ds.initialize();
    await ds.runMigrations();
    console.log("migration completed");
  } catch (err) {
    console.error("migration failed", err);
    process.exitCode = 1;
  } finally {
    if (ds.isInitialized) await ds.destroy();
  }
};

migrateRun().catch((err) => {
  console.error("migration failed", err);
  process.exitCode = 1;
});
