## 说明

本项目骨架来源于easywebpack-vue和vue-element-admin，经过个人梳理整合两个项目以达到个人开发需求

## 技术来源

- vue-element-admin(https://github.com/PanJiaChen/vue-element-admin)
- easywebpack(https://www.yuque.com/hubcarl)

## 项目结构
```

│  router.js                              // 项目服务路由入口        
│                                         // 
├─controller                              // 多页面路由控制器        
│      app.js                             //         
│      home.js                            //         
│                                         //     
├─middleware                              //         
│      access.js                          //             
│                                         //     
├─mocks                                   //     
│  └─article                              //         
│          list.js                        //             
│                                         //         
├─view                                    // 
│      .gitkeep                           //             
│      README.md                          //             
│                                         //     
└─web                                     // 
    ├─api                                 //     
    │      article.js                     //                 
    │      login.js                       //                 
    │      qiniu.js                       //                 
    │      remoteSearch.js                //                     
    │      transaction.js                 //                     
    │                                     //         
    ├─assets                              //         
    │  ├─css                              //         
    │  │      bootstrap.css               //                         
    │  │      global.css                  //                     
    │  │      normalize.css               //                         
    │  │                                  //         
    │  └─images                           //             
    │          404.png                    //                 
    │          404_cloud.png              //                         
    │          favicon.ico                //                     
    │          loading.gif                //                     
    │                                     //             
    ├─components                          //             
    │  ├─Breadcrumb                       //                 
    │  │      index.vue                   //                     
    │  │                                  //         
    │  ├─Hamburger                        //             
    │  │      index.vue                   //                     
    │  │                                  //         
    │  ├─LangSelect                       //                 
    │  │      index.vue                   //                     
    │  │                                  //         
    │  ├─layout                           //             
    │  │  ├─standard                      // 原生多页面+单页面布局框架                
    │  │  │  │  index.js                  //                     
    │  │  │  │  main.vue                  //                     
    │  │  │  │                            //             
    │  │  │  ├─content                    //                 
    │  │  │  │      content.css           //                             
    │  │  │  │      content.vue           //                             
    │  │  │  │                            //                 
    │  │  │  ├─footer                     //                 
    │  │  │  │      footer.css            //                         
    │  │  │  │      footer.vue            //                         
    │  │  │  │                            //                 
    │  │  │  └─header                     //                 
    │  │  │          header.css           //                             
    │  │  │          header.vue           //                             
    │  │  │                               //                 
    │  │  └─vueAdmin                      // vue-element-admin使用的布局框架                
    │  │      │  index.js                 //                     
    │  │      │  Layout.vue               //                         
    │  │      │                           //             
    │  │      ├─components                //                     
    │  │      │  │  AppMain.vue           //                             
    │  │      │  │  index.js              //                         
    │  │      │  │  Navbar.vue            //                         
    │  │      │  │  TagsView.vue          //                             
    │  │      │  │                        //                 
    │  │      │  └─Sidebar                //                     
    │  │      │          index.vue        //                             
    │  │      │          SidebarItem.vue  //                                     
    │  │      │                           //                     
    │  │      └─mixin                     //                 
    │  │              ResizeHandler.js    //                                 
    │  │                                  //                 
    │  ├─Screenfull                       //                 
    │  │      index.vue                   //                     
    │  │                                  //         
    │  └─SvgIcon                          //             
    │          index.vue                  //                     
    │                                     //             
    ├─framework                           //             
    │  ├─utils                            //         
    │  │      utils.js                    //                 
    │  │                                  //         
    │  └─vue                              //         
    │      ├─component                    //                 
    │      │      index.js                //                     
    │      │                              //             
    │      ├─directive                    //                 
    │      │      index.js                //                     
    │      │                              //             
    │      ├─entry                        //             
    │      │      client-loader.js        //                             
    │      │      client.js               //                         
    │      │      server-loader.js        //                             
    │      │      server.js               //                         
    │      │                              //             
    │      └─filter                       //                 
    │              index.js               //                         
    │                                     //                 
    ├─icons                               //         
    │  │  generateIconsView.js            //                         
    │  │  index.js                        //             
    │  │                                  //     
    │  └─svg                              //         
    │          404.svg                    //                 
    │          bug.svg                    //                 
    │          chart.svg                  //                     
    │          clipboard.svg              //                         
    │          component.svg              //                         
    │          dashboard.svg              //                         
    │          documentation.svg          //                             
    │          drag.svg                   //                     
    │          edit.svg                   //                     
    │          email.svg                  //                     
    │          example.svg                //                     
    │          excel.svg                  //                     
    │          eye.svg                    //                 
    │          form.svg                   //                     
    │          guide.svg                  //                     
    │          icon.svg                   //                     
    │          international.svg          //                             
    │          language.svg               //                         
    │          list.svg                   //                     
    │          lock.svg                   //                     
    │          message.svg                //                     
    │          money.svg                  //                     
    │          nested.svg                 //                     
    │          password.svg               //                         
    │          people.svg                 //                     
    │          peoples.svg                //                     
    │          qq.svg                     //                 
    │          shoppingCard.svg           //                             
    │          star.svg                   //                     
    │          tab.svg                    //                 
    │          table.svg                  //                     
    │          theme.svg                  //                     
    │          user.svg                   //                     
    │          wechat.svg                 //                     
    │          zip.svg                    //                 
    │                                     //             
    ├─lang                                //     
    │      en.js                          //             
    │      index.js                       //                 
    │      zh.js                          //             
    │                                     //         
    ├─page                                // 多页面存放目录    
    │  ├─app                              //     主应用    
    │  │      index.vue                   //        入口组件             
    │  │      permission.js               //        动态权限                 
    │  │                                  //         
    │  ├─errorPage                        //             
    │  │      404.vue                     //                 
    │  │                                  //         
    │  ├─home                             //         
    │  │      index.css                   //                     
    │  │      index.vue                   //                     
    │  │                                  //         
    │  └─login                            //     登录页面    
    │          authredirect.vue           //                             
    │          index.vue                  //                     
    │          socialsignin.vue           //                             
    │                                     //             
    ├─router                              // 单页面应用路由入口        
    │      index.js                       //                 
    │                                     //         
    ├─store                               // 单页面应用状态管理入口        
    │  │  getters.js                      //     getters模块            
    │  │  index.js                        //             
    │  │                                  //     
    │  └─modules                          //             
    │          app.js                     //                 
    │          errorLog.js                //                     
    │          permission.js              //                         
    │          tagsView.js                //                     
    │          user.js                    //                 
    │                                     //             
    ├─styles                              // 全局辅助样式        
    │      btn.scss                       //                 
    │      element-ui.scss                //                     
    │      index.scss                     //                 
    │      mixin.scss                     //                 
    │      sidebar.scss                   //                     
    │      transition.scss                //                     
    │      variables.scss                 //                     
    │                                     //         
    ├─utils                               //         
    │      auth.js                        //             
    │      clipboard.js                   //                     
    │      createUniqueString.js          //                             
    │      i18n.js                        //             
    │      index.js                       //                 
    │      openWindow.js                  //                     
    │      permission.js                  //                     
    │      request.js                     //                 
    │      validate.js                    //                 
    │                                     //         
    └─view                                //     
            layout.html                   //           

```