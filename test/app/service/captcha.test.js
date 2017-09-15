'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/app/service/captcha.test.js', () => {
  let app;
  let ctx;
  before(async function() {
    app = mock.app();
    await app.ready();
    ctx = app.mockContext();
  });

  afterEach(mock.restore);

  describe('generateCaptcha()', () => {
    it('should with return success', async function() {
      app.mockHttpclient(`${ctx.service.captcha.userServiceBaseUri}/captcha/sms`, 'GET', {
        data: {
          type: 'sms',
          captchaId: 'afbf9ff390bb473ba7f232450cb062b7',
        },
      });
      const captcha = await ctx.service.captcha.generateCaptcha();
      assert(captcha);
      assert(captcha.type === 'sms');
      assert(captcha.captchaId === 'afbf9ff390bb473ba7f232450cb062b7');
    });

    it('should without return success', async function(){
      app.mockHttpclient(``, 'GET', {

      });
    });
  });

  describe('loadCaptchaImage()', () => {
    it('should with return success', async function(){
      
    })
  });
});
