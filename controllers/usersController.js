const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model, cvModel) {
    super(model);
    this.cvModel = cvModel;
  }

  async insertOneUser(req, res) {
    const { name, email, keySkills, workExperience, education, contact } =
      req.body;
    try {
      // Create new user
      const newUser = await this.model.create({
        name: name,
        email: email,
        keySkills: keySkills,
        workExperience: workExperience,
        education: education,
        contact: contact,
      });
      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUser(req, res) {
    const { userId } = req.params;
    console.log("Here", userId, req.params);
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

  async updateUser(req, res) {
    const { name, email, contact, keySkills, education } = req.body;
    const { userId } = req.params;
    console.log("what is it?", req.body);
    console.log("userId?", req.params);
    try {
      const thisResume = await this.model.findOne({
        where: { id: userId },
      });
      thisResume.set({
        name: name,
        email: email,
        contact: contact,
        keySkills: keySkills,
        education: education,
      });
      await thisResume.save();
      return res.json();
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
