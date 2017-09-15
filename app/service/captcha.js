'use strict';

// app/service/captcha.js
module.exports = app => {
  class CaptchaService extends app.Service {
    constructor(ctx) {
      super(ctx);
      this.baseUri = app.config.captcha.serverUrl;
      this.userServiceBaseUri = app.config.users.serverUrl;
    }

    // 生成图片验证码
    async generateCaptcha() {
      // use build-in http client to GET captcha api
      const { data: captcha } = await this.ctx.curl(`${this.userServiceBaseUri}/captcha/sms`, {
        dataType: 'json',
      });

      return captcha;
    }

    // 获取验证码图片
    async loadCaptchaImage(captchaId) {
      const { res } = await this.ctx.curl(`${this.baseUri}/captcha.jpeg`, {
        data: {
          id: captchaId,
        },
        streaming: true,
      });

      return res.data;
    }

    // 验证图片验证码
    async verifyCaptcha(captchaId, code) {
      // TODO
      this.ctx.logger.info('verify captcha: %s, code: %s', captchaId, code);
    }
  }

  return CaptchaService;
};
