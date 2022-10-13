"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John",
        // last_name: "Doe",
        email: "john@john.com",
        contact: "1234 5678",
        key_skills: JSON.stringify([
          { name: "Javascript", description: "im so good at this" },
        ]),
        work_experience: JSON.stringify([
          {
            place: "apple",
            position: "hunky dory",
            description: "i worked at apple",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "pear",
            position: "semi head honcho",
            description: "i worked at pear",
            date_started: "date started",
            date_ended: "date started",
          },
        ]),
        education: JSON.stringify([
          {
            place: "orange",
            description: "i studied at orange",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "mangosteen",
            description: "i studied at mangosteen",
            date_started: "date started",
            date_ended: "date started",
          },
        ]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jane",
        // last_name: "Smith",
        email: "jane@jane.com",
        contact: "8765 4321",
        key_skills: JSON.stringify([
          { name: "CSS", description: "im so good at this" },
        ]),
        work_experience: JSON.stringify([
          {
            place: "ORANGE",
            description: "i worked at orange",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "durian",
            description: "i worked at durian",
            date_started: "date started",
            date_ended: "date started",
          },
        ]),
        education: JSON.stringify([
          {
            place: "orange",
            description: "i studied at orange",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "mangosteen",
            description: "i studied at mangosteen",
            date_started: "date started",
            date_ended: "date started",
          },
        ]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jill",
        // last_name: "Brown",
        email: "jill@jill.com",
        contact: "4321 5678",
        key_skills: JSON.stringify([
          { name: "Python", description: "im so good at this" },
        ]),
        work_experience: JSON.stringify([
          {
            place: "corn",
            description: "i worked at corn",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "grape",
            description: "i worked at grape",
            date_started: "date started",
            date_ended: "date started",
          },
        ]),
        education: JSON.stringify([
          {
            place: "orange",
            description: "i studied at orange",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "mangosteen",
            description: "i studied at mangosteen",
            date_started: "date started",
            date_ended: "date started",
          },
        ]),
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
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("cvs", null, {});
  },
};
