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
    username: "vzgf66defno8qka7",
    password: "nfdwaetfogke62v2",
    database: "d55091oh96kjp55q",
    host: "kcpgm0ka8vudfq76.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
    dialect: "mysql",
  },
};

module.exports = config;
