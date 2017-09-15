'use strict';

// app/controller/users.js
module.exports = app => {
  class CaptchaController extends app.Controller {
    async generateCaptcha(){
      this.body = await this.ctx.service.captcha.generateCaptcha();
    }

    async loadCaptchaImage(){
      const ctx = this.ctx;
      const captchaId = ctx.query.captchaId;
      this.body = await ctx.service.captcha.loadCaptchaImage(captchaId);
    }
  }

  return CaptchaController;
}
