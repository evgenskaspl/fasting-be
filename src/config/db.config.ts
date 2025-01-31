import { config } from "./config.js";

export const dbConfig = {
  development: {
    use_env_variable: config.database.dev.use_env_variable,
    username: config.database.dev.username,
    password: config.database.dev.password,
    database: config.database.dev.name,
    host: config.database.dev.host,
    port: config.database.dev.port,
    dialect: config.database.dialect,
    sync: { alter: true }, // automatic schema updates
  },
  test: {
    use_env_variable: config.database.test.use_env_variable,
    username: config.database.test.username,
    password: config.database.test.password,
    database: config.database.test.name,
    host: config.database.test.host,
    port: config.database.test.port,
    dialect: config.database.dialect,
    sync: { alter: true }, // automatic schema updates
  },
  production: {
    use_env_variable: config.database.production.use_env_variable,
    username: config.database.production.username,
    password: config.database.production.password,
    database: config.database.production.name,
    host: config.database.production.host,
    port: config.database.production.port,
    dialect: config.database.dialect,
    sync: { alter: false }, // disable automatic schema updates
  },
};
