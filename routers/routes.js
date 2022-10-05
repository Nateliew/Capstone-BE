module.exports = function (auth, express) {
  require("dotenv").config();

  const router = express.Router();
  // // importing Routers
  const UsersRouter = require("./routers/usersRouter");
  // const CvRouter = require("./routers/cvsRouter");

  // // importing Controllers
  const UsersController = require("../controllers/usersController");
  // const CvController = require("../controllers/CvController");

  // // importing DB
  const db = require("../db/models/index");
  const { user, cv } = db;

  // // initializing Controllers -> note the lowercase for the first word
  const usersController = new UsersController(user);
  // const CvController = new CvController(
  //   users,
  //   cv,
  //   info
  // );

  // // initializing Routers
  const usersRouter = new UsersController(usersRouter).routes();
  // const CvRouter = new CvRouter(CvRouter).routes();

  // // enable and use router
  router.use("/", usersRouter);
  // router.use("/cv", cvRouter);

  return router;
};
