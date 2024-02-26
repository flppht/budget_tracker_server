const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "budgettracker",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME_PROD,
    password: process.env.DB_USERNAME_PROD,
    database: process.env.DB_USERNAME_PROD,
    host: process.env.DB_USERNAME_PROD,
    dialect: "mysql",
  },
};

module.exports = config;
