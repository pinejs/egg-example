'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/news', 'news.list');

  // captcha
  app.get('/captcha/gen', 'captcha.generateCaptcha');
  app.get('/captcha/image', 'captcha.loadCaptchaImage');

  // account
  app.post('/account/user/register', 'users.register');
  app.post('/account/user/login', 'users.login');
  app.get('/account/user/login_log', 'users.loginLogs');
  app.get('/account/user/logout', 'users.logout');

};
