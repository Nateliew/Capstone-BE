const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.get("/", this.controller.getAllUsers.bind(this.controller));
    router.post("/", this.controller.insertOneUser.bind(this.controller));
    router.get("/:userId", this.controller.getUser.bind(this.controller));
    router.get("/:userId/cv", this.controller.getCV.bind(this.controller));
    router.post(
      "/:userId/cv",
      this.controller.addTemplateCV.bind(this.controller)
    );
    // router.post(
    //   "/:userId/cv",
    //   this.controller.addTemplateCV.bind(this.controller)
    // );

    // router.get(
    //   "/:userId/cv",
    //   this.controller.getUserTemplate.bind(this.controller)
    // );

    return router;
  }
}

module.exports = UsersRouter;
