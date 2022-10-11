"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John",
        // last_name: "Doe",
        email: "john@john.com",
        key_skills: JSON.stringify([
          { name: "Javascript", description: "im so good at this" },
        ]),
        work_experience: JSON.stringify([
          {
            place: "apple",
            description: "i worked at apple",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "pear",
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
