<!--应用入口-->
<template>
    <Layout title="单页面">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
    </Layout> 
</template>

<script type="text/babel">
import Vue from 'vue';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from '@/store/';
import { sync } from 'vuex-router-sync';
import router from '@/router';

import i18n from '@/lang';
import '@/icons';
import './permission';
import * as filters from '@/framework/utils/utils.js'; // global filters

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => {
    i18n.t(key, value);
  }
});

Vue.config.productionTip = false;
// 批量导入过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

sync(store, router);

export default {
  name: 'App',
  router,
  store,
  i18n
};
</script>

<style rel="stylesheet/scss" lang="scss">
// 全局样式不可添加scoped
  @import "../../styles/index.scss";
</style>
