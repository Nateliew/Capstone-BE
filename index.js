const cors = require("cors");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");

const router = require("./routers/routes")(auth, express);

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
