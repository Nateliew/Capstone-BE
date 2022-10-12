const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model) {
    super(model);
  }

  async insertOneUser(req, res) {
    const { name, email, workExperience, education, contact } = req.body;
    try {
      // Create new user
      const newUser = await this.model.create({
        name: name,
        email: email,
        keySkill: education,
        workExperience: workExperience,
        education: education,
        contact: contact,
      });
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
