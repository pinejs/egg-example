'use strict';

// app/service/users.js
module.exports = app => {
  class UsersService extends app.Service {
    constructor(ctx) {
      super(ctx);
      this.baseUri = app.config.users.serverUrl;
      this.defaultPageSize = app.config.users.pageSize;
    }

    async request(url, opts) {
      url = `${this.baseUri}${url}`;
      opts = Object.assign({
        timeout: [ '30s', '30s' ],
        dataType: 'json',
      }, opts);
      return await this.ctx.curl(url, opts);
    }

    // 发送注册验证码
    async sendSmsCode(phone) {
      const res = await this.request('/validate/login/{mobile}', {
        method: 'POST',
        data: {
          phone,
        }
      });
      return res.data;
    }

    // 快速注册
    async quickRegister(phone, smsCode) {
      const res = await this.request('/auth/simple', {
        method: 'POST',
        data: {
          phone,
          smsCode,
        }
      });
      return res.data;
    }

    // 注册
    async register(phone, smsCode, password) {
      const res = await this.request('/user/register', {
        method: 'POST',
        data: {
          phone,
          smsCode,
          password,
        }
      });
      return res;
    }

    // 登录
    async login(phone, password) {
      this.ctx.logger.info("login start...")
      const res = await this.request('/user/login', {
        method: 'POST',
        data: {
          phone,
          password,
        }
      });
      this.ctx.logger.info("login response: ", res);

      return res;
    }

    // 登录日志
    async loginLogs() {
      const res = await this.request('/user/login_log', {
        headers: this.ctx.request.headers,
        data: {
        }
      });
      return res.data;
    }

    // 登出
    async logout() {
      const res = await this.request('/user/logout', {
        headers: this.ctx.request.headers,
        method: 'POST',
        data: { }
      });
      return res.data;
    }
  }

  return UsersService;
};
