const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const db = require("./models");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  // Change * to your specific origin if needed
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

//routers
const expensesRouter = require("./routes/Expenses");
app.use("/expenses", expensesRouter);

const incomeRouter = require("./routes/Income");
app.use("/income", incomeRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const port = process.env.PORT || 3001;

db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is listening on port: ", port);
    });
  })
  .catch((err) => console.log(err));
