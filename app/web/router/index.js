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
export const constantRouterMap = [
  // { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/page/app/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/fas',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/page/app/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  { path: '/404', component: () => import('@/page/errorPage/404'), hidden: true },
];

export default new Router({
  mode: 'history', // require service support
  base: '/app',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
// =====*mark*=====此部分路由涉及权限控制，故在permission.js中根据角色判定是否动态添加至全局router中
export const asyncRouterMap = [
  /* API 管理*/
  {
    path: '/apimanage',
    component: Layout,
    redirect: '/apimanage/list',
    name: 'apiManage',
    children: [{
      path: 'list',
      component: () => import('@/page/app/index'),
      name: 'list',
      meta: {
        title: 'apiManage',
        icon: 'businesscard',
        noCache: true
      },
    }, {// 查看API详情
      path: 'details',
      component: () => import('@/page/app/index'),
      name: 'details',
      meta: {
        title: 'apiDetails',
        noCache: true
      },
    }, { // 保存API
      path: 'create',
      component: () => import('@/page/app/index'),
      name: 'create',
      meta: {
        title: 'createApi',
        noCache: true
      }
    }, {// 修改API
      path: 'update',
      component: () => import('@/page/app/index'),
      name: 'update',
      meta: {
        title: 'updateApi',
        noCache: true
      }
    }, {// 详情图表展示
      path: 'chartsPage',
      component: () => import('@/page/app/index'),
      name: 'chartsPage',
      meta: {
        title: 'chartsPage',
        noCache: true
      }
    }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
];
