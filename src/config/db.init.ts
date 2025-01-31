import { Sequelize } from "sequelize";
import { dbConfig } from "../config/db.config.js";

const env: keyof typeof dbConfig =
  (process.env.NODE_ENV as "development" | "test" | "production" | undefined) ||
  "development";
const config = dbConfig[env];

let sequelize: Sequelize;

if (config.use_env_variable && process.env[config.use_env_variable]) {
  const dbUrl = process.env[config.use_env_variable];
  sequelize = new Sequelize(dbUrl!, config as any);
} else {
  sequelize = new Sequelize({
    dialect: config.dialect as "postgres",
    host: config.host,
    port: Number(config.port),
    username: config.username,
    password: config.password,
    database: config.database,
    logging: false, // Disable SQL logs
  });
}

export { sequelize };
