'use strict';

const ms = require('ms');

// app/controller/users.js
module.exports = app => {
  class UsersController extends app.Controller {
    async register() {
      const ctx = this.ctx;
      const { phone, smsCode, password } = ctx.request.body;
      const res = await ctx.service.users.register(phone, smsCode, password);
      ctx.status = res.status;
      ctx.set(res.headers);
      ctx.body = res.data;
    }

    async login() {
      const ctx = this.ctx;
      const { phone, password } = ctx.request.body;
      const res = await ctx.service.users.login(phone, password);
      ctx.status = res.status;
      ctx.set(res.headers);
      ctx.body = res.data;
    }

    async loginLogs() {
      const ctx = this.ctx;
      const res = await ctx.service.users.loginLogs();
      ctx.body = res;
    }

    async logout() {
      const ctx = this.ctx;
      const res = await ctx.service.users.logout();
      ctx.body = res;
    }
  }

  return UsersController;
};
