const Model = require('../mocks/article/list');

module.exports = app => {

  return class AppController extends app.Controller {
    async login() {
      const { ctx } = this;
      await ctx.renderClient('login/index.js', Model.getPage(1, 10));
    }
    async index() {
      const { ctx } = this;
      await ctx.renderClient('app/index.js', Model.getPage(1, 10));
    }
    async error() {
      const { ctx } = this;
      await ctx.renderClient('errorPage/404.js', Model.getPage(1, 10));
    }
  };
};