const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model, cvModel) {
    super(model);
    this.cvModel = cvModel;
  }

  async insertNewUser(req, res) {
    const { name, email } = req.body;
    try {
      const user = await this.model.findOrCreate({
        where: { email: email },
        defaults: {
          name: name,
        },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUser(req, res) {
    const { userId } = req.params;
    try {
      const newUser = await this.model.findAll({
        where: { id: Number(userId) },
      });
      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getCV(req, res) {
    const { userId } = req.params;
    try {
      const userCv = await this.cvModel.findAll({
        where: { userId: Number(userId) },
      });
      return res.json(userCv);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updateCV(req, res) {
    const { summary, templateId } = req.body;
    const { userId } = req.params;
    console.log("running", req.body);
    try {
      const theCV = await this.cvModel.findOrCreate({
        where: { userId: userId },
        defaults: {
          summary: summary,
        },
      });
      const newCV = await this.cvModel.findOne({
        where: { userId: userId },
      });
      console.log("this block runs for summary", summary);
      newCV.set({
        summary: summary,
      });
      await newCV.save();
      return res.json();
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updateUser(req, res) {
    const {
      name,
      email,
      contact,
      keySkills,
      workExperience,
      education,
      image,
    } = req.body;
    console.log(req.body);
    const { userId } = req.params;
    try {
      const thisResume = await this.model.findOne({
        where: { id: userId },
      });
      thisResume.set({
        name: name,
        email: email,
        contact: contact,
        keySkills: keySkills,
        workExperience: workExperience,
        education: education,
        image: image,
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
