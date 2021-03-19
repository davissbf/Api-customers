module.exports = {
  up: async queryInterface => queryInterface.removeColumn('users', 'provider'),

  down: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('users', 'provider', {
      type: Sequelize.BOOLEAN,
      default: false,
      alloeNull: false,
    }),
};
