'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499736497523_4848';

  config.middleware = [ 'errorHandler' ];

  // disable xframe & csrf
  config.security = {
    xframe: {
      enable: false,
    },
    xss: {
      enable: false,
    },
    csrf: {
      enable: false,
      ignoreJSON: true,
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: '',
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  // sequelize
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'funds_order',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  };

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.captcha = {
    serverUrl: 'http://172.30.248.170/api/v1/captcha',
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.users = {
    pageSize: 5,
    serverUrl: 'http://devtest.360taihe.com/api/v1/account',
    adminUrl: 'http://devtest.360taihe.com/api/v1/account-admin',
  };

  config.sms = {
    pageSize: 5,
    serverUrl: 'http://devtest.360taihe.com/api/v1/trcsms',
    adminUrl: 'http://devtest.360taihe.com/api/v1/trcsms/admin',
  };

  config.ecard = {
    pageSize: 5,
    serverUrl: 'http://devtest.360taihe.com/api/v3/ecard-dew',
  };

  config.checkstand = {
    pageSize: 5,
    serverUrl: 'http://devtest.360taihe.com/api/v3/funds',
    callbackUrl: 'http://devtest.360taihe.com/api/v3/funds-callback',
  };

  return config;
};
