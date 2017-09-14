// app/service/news.js
module.exports = app => {
  // read config
  const { serverUrl, pageSize } = app.config.users;

  class UsersService extends app.Service {
    // 发送注册验证码
    * sendSmsCode(mobile) {
      const res = yield this.ctx.curl(`${serverUrl}/validate/login/{mobile}`, {
        data: {
          phone: '"$mobile"'
        },
        dataType: 'json',
      });
      return res.data;
    }

    // 快速注册
    * quickRegister(mobile, smsCode){
      const res = yield this.ctx.curl(`${serverUrl}/auth/simple`, {
        data: {
          phone: '"$mobile"'
        },
        dataType: 'json',

        // 3 秒超时
        timeout: 3000,
      });
      return res.data;
    }
  }

  return UsersService;
}
