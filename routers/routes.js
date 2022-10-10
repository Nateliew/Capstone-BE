module.exports = function (express) {
  require("dotenv").config();

  const router = express.Router();
  // importing Routers
  const UsersRouter = require("./usersRouter");

  // importing Controllers
  const UsersController = require("../controllers/usersController");

  // importing DB
  const db = require("../db/models/index");
  const { user } = db;

  // initializing Controllers -> note the lowercase for the first word
  const usersController = new UsersController(user);

  // inittializing Routers
  const usersRouter = new UsersRouter(usersController).routes();

  // // enable and use router
  router.use("/", usersRouter);

  return router;
};
