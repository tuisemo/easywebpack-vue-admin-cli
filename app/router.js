// 此处定义多页面路由
module.exports = app => {
  // 正则匹配路由地址，分发不同的控制器
  app.get('/app(/.+)?', app.controller.app.index);
  app.get('/', app.controller.app.login);
};
