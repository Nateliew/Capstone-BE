const cors = require("cors");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const router = require("./routers/routes")(express);

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

app.use(router);

//test here
// // importing Routers
// const UsersRouter = require("./routers/usersRouter");

// // importing Controllers
// const UsersController = require("./controllers/usersController");

// // importing DB
// const db = require("./db/models/index");
// const { user } = db;

// // initializing Controllers -> note the lowercase for the first word
// const usersController = new UsersController(user);

// // inittializing Routers
// const usersRouter = new UsersRouter(usersController).routes();

// app.use("/", usersRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
