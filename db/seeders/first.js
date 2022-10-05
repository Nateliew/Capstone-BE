"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John",
        // last_name: "Doe",
        email: "john@john.com",
        keySkills: "Javascript",
        workExperience: "Apple, 5 years, full-stack, In charge of project A",
        education: "Bachelor",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jane",
        // last_name: "Smith",
        email: "jane@jane.com",
        keySkills: "CSS",
        workExperience: "Google, 10 years, front-end, In charge of project B",
        education: "Bachelor",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jill",
        // last_name: "Brown",
        email: "jill@jill.com",
        keySkills: "Python",
        workExperience: "Shopee, 8 years, back-end, In charge of project C",
        education: "Bachelor",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("cvs", [
      {
        summary: "Bla bla bla",
        user_id: 1,
        template_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        summary: "Yada yada yada",
        user_id: 2,
        template_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        summary: "Yada yada yada",
        user_id: 3,
        template_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // await queryInterface.bulkInsert("user_infos", [
    //   {
    //     user_id: 1,
    //     template_id: 1,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     user_id: 1,
    //     template_id: 2,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     user_id: 2,
    //     template_id: 2,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     user_id: 3,
    //     template_id: 1,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     user_id: 4,
    //     template_id: 1,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ]);
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete("templates", null, {});
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("cvs", null, {});
  },
};
