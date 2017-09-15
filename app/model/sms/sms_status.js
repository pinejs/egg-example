'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const SmsStatus = app.model.define('SmsStatus', {
    msgId: {
      type: STRING(32),
      primaryKey: true,
    },
    msgGroupId: STRING(32),
    status: STRING(32),
    retriedTimes: INTEGER,
    createdAt: DATE,
    updatedAt: DATE,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sms_status',
  });

  return SmsStatus;
};
