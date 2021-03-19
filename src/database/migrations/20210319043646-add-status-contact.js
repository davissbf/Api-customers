module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('contact', 'status', {
      type: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
      allowNull: false,
      defaultValue: 'ACTIVE',
    });
  },

  down: async queryInterface =>
    queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.removeColumn('contact', 'status', { transaction });
      await queryInterface.sequelize.query('DROP TYPE enum_contact_status', {
        transaction,
      });
    }),
};
