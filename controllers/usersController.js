const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model, cvModel) {
    super(model);
    this.model = model;
    this.cvModel = cvModel;
  }

  async getCV(req, res) {
    const { userId } = req.params;
    console.log(userId, req.params, "user id and req params in getCV");
    try {
      console.log(this.cvModel, "cv model");
      const userCv = await this.cvModel.findAll({
        where: { userId: Number(userId) },
      });
      return res.json(userCv);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async insertOneUser(req, res) {
    const { name, email, keySkills, workExperience, education, contact } =
      req.body;
    console.log("in insert one user", this.model);
    try {
      const newUser = await this.model.create({
        name: name,
        email: email,
        keySkills: keySkills,
        workExperience: workExperience,
        education: education,
        contact: contact,
      });
      let parsedData = JSON.parse(newUser);
      console.log(parsedData, "parsed data new user");
      return res.send(parsedData);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  getAllUsers = async (req, res) => {
    try {
      console.log("in user controller!", this.model);
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  async getUser(req, res) {
    const { userId } = req.params;
    console.log("in get user", userId, req.params);
    try {
      const newUser = await this.model.findAll({
        where: { id: Number(userId) },
      });
      console.log(
        "userid and new user in get user",
        userId,
        this.model,
        newUser
      );

      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // async insertOneUser(req, res) {
  //   const { name, email } = req.body;
  //   try {
  //     const user = await this.model.findOrCreate({
  //       where: { email: email },
  //       defaults: {
  //         name: name,
  //       },
  //     });
  //     return res.json(user);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }
}

module.exports = UsersController;
