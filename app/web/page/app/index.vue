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

// import Layout from 'component/layout/app';
// import './filters';
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => {
    i18n.t(key, value);
  }
});

sync(store, router);

export default {
  router,
  store,
  i18n
};
</script>

<style rel="stylesheet/scss" lang="scss">
// 全局样式不可添加scoped
  @import "../../styles/index.scss";
</style>
