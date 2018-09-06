// 此处定义多页面路由
module.exports = app => {
  // 正则匹配路由地址，分发不同的控制器
  app.get('/', app.controller.app.login);
  app.get('/app(/.+)?', app.controller.app.index);
  // app.get('/login', app.controller.app.login);
  // app.get('/', app.controller.home.index);
  // app.get('/client', app.controller.home.client);
  // app.get('/pager', app.controller.home.pager);
};
