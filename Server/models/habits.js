'use strict';
module.exports = (sequelize, DataTypes) => {
  const habits = sequelize.define('habits', {
    userId: DataTypes.INTEGER,
    habit: DataTypes.STRING,
    commitment: DataTypes.FLOAT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    completedFl: DataTypes.BOOLEAN,
    daysCompleted: DataTypes.INTEGER,
    daysMissed: DataTypes.INTEGER,
    totalDays: DataTypes.INTEGER
  }, {});
  habits.associate = function(models) {
    // associations can be defined here
  };
  return habits;
};