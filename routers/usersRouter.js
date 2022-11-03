const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }

  routes() {
    router.get("/", this.auth, this.controller.getAll.bind(this.controller));
    router.post(
      "/",
      this.auth,
      this.controller.insertNewUser.bind(this.controller)
    );
    router.get(
      "/:userId",
      this.auth,
      this.controller.getUser.bind(this.controller)
    );
    router.put(
      "/:userId",
      this.auth,
      this.controller.updateUser.bind(this.controller)
    );
    router.get(
      "/:userId/cv",
      this.auth,
      this.controller.getCV.bind(this.controller)
    );
    // router.get(
    //   "/:userId/cv/cvId",
    //   this.auth,
    //   this.controller.getOneCV.bind(this.controller)
    // );
    router.post(
      "/:userId/cv",
      this.auth,
      this.controller.addCV.bind(this.controller)
    );
    router.put(
      "/:userId/cv",
      this.auth,
      this.controller.updateCV.bind(this.controller)
    );
    router.delete(
      "/:userId/cv",
      this.auth,
      this.controller.deleteTemplate.bind(this.controller)
    );
    return router;
  }
}

module.exports = UsersRouter;
