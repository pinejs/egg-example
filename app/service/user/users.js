// app/service/news.js
module.exports = app => {
  // read config
  const { serverUrl, pageSize } = app.config.users;

  class UsersService extends app.Service {
    // 发送注册验证码
    * sendSmsCode(mobile) {
      const res = yield this.ctx.curl(`${serverUrl}/validate/login/{mobile}`, {
        method: 'POST',
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
        method: 'POST',
        data: {
          phone: '"$mobile"'
        },
        dataType: 'json',

        // 3 秒超时
        timeout: 3000,
      });
      return res.data;
    }

    //注册
    * register(mobile, smsCode， password){
      const res = yield this.ctx.curl(`${serverUrl}/user/register`, {
        method: 'POST',
        data: {
          phone: mobile,
          smsCode: smsCode,
          password: password
        },
        dataType: 'json',

        // 3 秒超时
        timeout: 3000,
      });
      return res.data;
    }

    //登录
    * login(mobile, password){
      const res = yield this.ctx.curl(`${serverUrl}/user/login`, {
        method: 'POST',
        data: {
          phone: mobile,
          password: password
        },
        dataType: 'json',

        // 3 秒超时
        timeout: 3000,
      });
      return res.data;
    }

    //登出
    * logout(mobile, password){
      const res = yield this.ctx.curl(`${serverUrl}/user/logout`, {
        method: 'POST',
        data: { },
        dataType: 'json',

        // 3 秒超时
        timeout: 3000,
      });
      return res.data;
    }
  }

  return UsersService;
}
