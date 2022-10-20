module.exports = function (auth, express) {
  require("dotenv").config();

  const checkJwt = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER,
  });

  const router = express.Router();
  // importing Routers
  const UsersRouter = require("./usersRouter");

  // importing Controllers
  const UsersController = require("../controllers/usersController");

  // importing DB
  const db = require("../db/models/index");
  const { user, cv } = db;

  // initializing Controllers -> note the lowercase for the first word
  const usersController = new UsersController(user, cv);

  // inittializing Routers
  const usersRouter = new UsersRouter(usersController, checkJwt).routes();

  // // enable and use router
  router.use("/", usersRouter);

  return router;
};
