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
    console.log("here????");
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
    console.log("this????????");
    try {
      const userCv = await this.cvModel.findAll({
        where: { userId: Number(userId) },
      });
      return res.json(userCv);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // async getOneCV(req, res) {
  //   const { userId, cvId } = req.params;
  //   console.log("why??????", req.params, req.body);
  //   try {
  //     const userCv = await this.cvModel.findAll({
  //       where: { userId: Number(userId), id: Number(cvId) },
  //     });
  //     return res.json(userCv);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  async addCV(req, res) {
    const { summary, templateId, name } = req.body;
    const { userId } = req.params;
    console.log("template", templateId);
    try {
      // Create new trip
      const newCV = await this.cvModel.create({
        summary: summary,
        userId: userId,
        templateId: templateId,
        name: name,
      });

      return res.json(newCV);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updateCV(req, res) {
    const { summary, name, cvId } = req.body;
    const { userId } = req.params;
    console.log("running", req.body);
    try {
      const theCV = await this.cvModel.findOrCreate({
        where: { userId: userId },
        defaults: {
          summary: summary,
          name: name,
        },
      });
      const newCV = await this.cvModel.findOne({
        where: { id: cvId },
      });
      console.log("this block runs for summary", summary);
      newCV.set({
        summary: summary,
        name: name,
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

  async deleteTemplate(req, res) {
    const { cvId, templateId } = req.body;
    const { userId } = req.params;

    console.log(req.params);
    try {
      let response = await this.cvModel.destroy({
        where: {
          id: Number(cvId),
        },
      });
      // const resumes = await this.cvModel.findAll({
      //   where: {
      //     templateId: Number(templateId),
      //   },
      // });
      const resumes = await this.cvModel.findAll({
        where: { userId: Number(userId) },
      });
      console.log(response.data);
      return res.json(resumes);
    } catch (e) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
