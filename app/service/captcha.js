// app/service/captcha.js
module.exports = app => {
  // read config
  const { serverUrl } = app.config.captcha;
  const { serverUrl: userServerUrl } = app.config.users;

  class CaptchaService extends app.Service {
    // 生成图片验证码
    * captcha() {
      // use build-in http client to GET captcha api
      const { data: captcha } = yield this.ctx.curl(`${userServerUrl}/captcha/sms`, {
        dataType: 'json',
      });

      return captcha.captchaId;
    }

    // 获取验证码图片
    * captchaImage(captchaId) {
      const { res } = yield this.ctx.curl(`${serverUrl}/captcha.jpeg`, {
        data: {
          id: captchaId
        },
        dataType: 'base64'
      });

      return res.data;
    }

    //验证图片验证码
    * verifyCaptcha(captchaId, code){
      //TODO
    }
  }

  return CaptchaService;
}
