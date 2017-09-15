'use strict';

// app/controller/news.js
module.exports = app => {
  class NewsController extends app.Controller {
    * list() {
      const ctx = this.ctx;
      const page = ctx.query.page || 1;
      const pageSize = ctx.query.pageSize || this.config.news.pageSize;
      const newsList = yield ctx.service.news.list(page);
      yield ctx.render('news/list.tpl', { list: newsList, page, pageSize });
    }
  }
  return NewsController;
};
