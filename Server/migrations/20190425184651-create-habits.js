'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('habits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      habit: {
        type: Sequelize.STRING
      },
      commitment: {
        type: Sequelize.FLOAT
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      completedFl: {
        type: Sequelize.BOOLEAN
      },
      daysCompleted: {
        type: Sequelize.INTEGER
      },
      daysMissed: {
        type: Sequelize.INTEGER
      },
      totalDays: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('habits');
  }
};