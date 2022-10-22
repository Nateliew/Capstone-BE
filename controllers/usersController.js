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

  // async insertOneUser(req, res) {
  //   const { name, email, keySkills, workExperience, education, contact } =
  //     req.body;
  //   try {
  //     // Create new user
  //     const newUser = await this.model.create({
  //       name: name,
  //       email: email,
  //       keySkills: keySkills,
  //       workExperience: workExperience,
  //       education: education,
  //       contact: contact,
  //     });
  //     return res.json(newUser);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  // async insertOneUser(req, res) {
  //   const {
  //     name,
  //     email,
  //     keySkills,
  //     workExperience,
  //     education,
  //     contact,
  //     image,
  //   } = req.body;
  //   try {
  //     const newResume = await this.model.findOne({
  //       where: { id: userId },
  //     });
  //     newResume.set({
  //       name: name,
  //       email: email,
  //       keySkills: keySkills,
  //       workExperience: workExperience,
  //       education: education,
  //       contact: contact,
  //       image: image,
  //     });
  //     await newResume.save();
  //     return res.json();
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

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
    // console.log(userId, req.params, "user id and req params in getCV");
    try {
      // console.log(this.cvModel, "cv model");
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
