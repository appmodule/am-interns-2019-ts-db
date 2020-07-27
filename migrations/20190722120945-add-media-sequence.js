'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'saved_chunks',
      'media_sequence',
      {
        type: Sequelize.BIGINT(14),
        allowNull: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn(
     'saved_chunks',
     'media_sequence'
   );
  }
};
