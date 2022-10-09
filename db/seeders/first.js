"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John",
        // last_name: "Doe",
        email: "john@john.com",
        key_skill: "Javascript",
        work_experience: "Apple, 5 years, full-stack, In charge of project A",
        education: "Bachelor",
        contact: "90001235",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jane",
        // last_name: "Smith",
        email: "jane@jane.com",
        key_skill: "CSS",
        work_experience: "Google, 10 years, front-end, In charge of project B",
        education: "Bachelor",
        contact: "91237890",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jill",
        // last_name: "Brown",
        email: "jill@jill.com",
        key_skill: "Python",
        work_experience: "Shopee, 8 years, back-end, In charge of project C",
        education: "Bachelor",
        contact: "95658905",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("cvs", [
      {
        summary:
          "I'm a self-taught web developer focusing on the core web fundamentals - HTML, CSS and JS.",
        misc: "Created game A",
        user_id: 1,
        template_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        summary:
          "I have attended a bootcamp and am well versed in JS, Python, and CSS.",
        misc: "Created app X",
        user_id: 2,
        template_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        summary: "Yada yada yada",
        misc: "Created app C",
        user_id: 3,
        template_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete("templates", null, {});
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("cvs", null, {});
  },
};
