import dotenv from "dotenv";
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  webtoken: process.env.JWT_SECRET,
  client: process.env.CLIENT_URL,
  database: {
    dev: {
      username: process.env.POSTGRES_USER_DEV,
      password: process.env.POSTGRES_PASSWORD_DEV,
      name: process.env.POSTGRES_DB_DEV,
      host: process.env.POSTGRES_HOST_DEV,
      port: process.env.POSTGRES_PORT_DEV,
      use_env_variable: process.env.DATABASE_URL_DEV,
    },
    production: {
      username: process.env.DB_USERNAME_PROD,
      password: process.env.DB_PASSWORD_PROD,
      name: process.env.POSTGRES_DB_PROD,
      host: process.env.POSTGRES_HOST_PROD,
      port: process.env.POSTGRES_PORT_PROD,
      use_env_variable: process.env.DATABASE_URL_PROD,
    },
    test: {
      username: process.env.DB_USERNAME_TEST,
      password: process.env.DB_PASSWORD_TEST,
      name: process.env.POSTGRES_DB_TEST,
      host: process.env.POSTGRES_HOST_TEST,
      port: process.env.POSTGRES_PORT_TEST,
      use_env_variable: process.env.DATABASE_URL_TEST,
    },
    dialect: process.env.DB_DIALECT,
  },
};
