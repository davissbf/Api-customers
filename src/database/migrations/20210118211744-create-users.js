module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        default: false,
        alloeNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        alloeNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        alloeNull: false,
      },
    }),

  down: queryInterface => queryInterface.dropTable('users'),
};
