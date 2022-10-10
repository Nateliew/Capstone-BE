const cors = require("cors");
const express = require("express");
require("dotenv").config();

// // importing Routers
// const UserRouter = require("./routers/userRouter");
// const TemplatesRouter = require("./routers/templatesRouter");

// // importing Controllers
// const UserController = require("./controllers/userController");
// const TemplatesController = require("./controllers/templatesController");

// // importing DB
// const db = require("./db/models/index");
// const { user, templates, user_info } = db;

// // initializing Controllers -> note the lowercase for the first word
// const userController = new UserController(user);
// const templatesController = new TemplatesController(
//   user,
//   templates,
//   user_info
// );

// // initializing Routers
// const userRouter = new UserController(userRouter).routes();
// const templatesRouter = new TemplatesRouter(templatesRouter).routes();

// const PORT = process.env.PORT;
const PORT = 8080;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// // enable and use router
// app.use("/user", userRouter);
// app.use("/templates", templatesRouter);

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
