'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('actors', [
      {
        first_name: "test1",
        last_name: "test1",
        dob: "1986-12-04",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est sit fugit numquam error nisi deleniti quibusdam repudiandae culpa possimus.",
        profile_photo: "https://picsum.photos/900/600",
        active: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: "test2",
        last_name: "test2",
        dob: "1986-12-04",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est sit fugit numquam error nisi deleniti quibusdam repudiandae culpa possimus.",
        profile_photo: "https://picsum.photos/900/600",
        active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: "test3",
        last_name: "test3",
        dob: "1986-12-04",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est sit fugit numquam error nisi deleniti quibusdam repudiandae culpa possimus.",
        profile_photo: "https://picsum.photos/900/600",
        active: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: "test4",
        last_name: "test4",
        dob: "1986-12-04",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est sit fugit numquam error nisi deleniti quibusdam repudiandae culpa possimus.",
        profile_photo: "https://picsum.photos/900/600",
        active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: "test5",
        last_name: "test5",
        dob: "1986-12-04",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est sit fugit numquam error nisi deleniti quibusdam repudiandae culpa possimus.",
        profile_photo: "https://picsum.photos/900/600",
        active: false,
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('actors', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
