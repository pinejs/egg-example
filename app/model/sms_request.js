'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const SmsRequest = app.model.define('SmsRequest', {
    msgId: {
      type: STRING(32),
      primaryKey: true
    },
    msgGroupId: STRING(32),
    platformCode: STRING(32),
    templateCode: STRING(32),
    phone: STRING(12),
    priority: INTEGER,
    policyId: INTEGER,
    params: STRING(512),
    content: STRING(512),
    createdAt: DATE,
    updatedAt: DATE,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sms_request',
  });

  return SmsRequest;
};
