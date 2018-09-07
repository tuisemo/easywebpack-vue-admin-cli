import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/components/layout/vueAdmin/Layout';

/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [{
  path: '',
  component: Layout,
  redirect: 'index',
  children: [{
    path: 'index',
    component: () =>
        import('@/page/statistics/index'),
    name: 'index',
    meta: {
      title: 'index',
      icon: 'index',
      noCache: true
    }
  }]
},
{
  path: '/business',
  component: Layout,
  children: [{
    path: '',
    component: () =>
        import('@/page/business/index'),
    name: 'business',
    meta: {
      title: 'business',
      icon: 'business',
      noCache: true
    }
  }]
},
{
  path: '/carModel',
  component: Layout,
  children: [{
    path: '',
    component: () =>
        import('@/page/business/index'),
    name: 'carModel',
    meta: {
      title: 'carModel',
      icon: 'carModel',
      noCache: true
    }
  }]
},
{
  path: '/404',
  component: () =>
      import('@/page/errorPage/404'),
  hidden: true
},
];

export default new Router({
  mode: 'history', // require service support
  base: '/app',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});
// =====*mark*=====此部分路由涉及权限控制，故在permission.js中根据角色判定是否动态添加至全局router中
export const asyncRouterMap = [
  /* 应用配置*/
  {
    path: '/appConfig',
    component: Layout,
    // alwaysShow: true, // will always show the root menu
    meta: {
      title: 'appConfig',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'page',
      component: () =>
        import('@/page/business/index'),
      name: 'appConfig',
      meta: {
        title: 'appConfig',
        roles: ['admin'] // or you can only set roles in sub nav
      },
    }, {
      path: 'sub',
      component: () =>
        import('@/page/business/index'),
      name: 'sub',
      meta: {
        title: 'appConfig',
        roles: ['admin'] // or you can only set roles in sub nav
      },
    } ]
  },
  /* API 统计*/
  {
    path: '/apiCount',
    component: Layout,
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'appConfig',
      icon: 'lock',
      roles: ['admin'],
      noCache: true
    },
    children: [{
      path: '',
      component: () =>
        import('@/page/business/index'),
      name: 'apiCount',
      meta: {
        title: 'apiCount',
        noCache: true
      },
    } ]
  },
  /* API 统计*/
  {
    path: '/messageCount',
    component: Layout,
    meta: {
      title: 'messageCount',
      icon: 'applicationConfig',
      noCache: true
    },
    children: [{
      path: '',
      component: () =>
        import('@/page/home/index'),
      name: 'messageCount',
      meta: {
        title: 'messageCount',
        noCache: true
      },
    } ]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];
