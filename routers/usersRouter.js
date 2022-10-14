const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.insertOneUser.bind(this.controller));
    router.get("/:userId", this.controller.getUser.bind(this.controller));
    router.put("/:userId", this.controller.updateUser.bind(this.controller));
    router.get("/:userId/cv", this.controller.getCV.bind(this.controller));
    return router;
  }
}

module.exports = UsersRouter;
