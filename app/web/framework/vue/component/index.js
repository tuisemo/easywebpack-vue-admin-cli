import Vue from 'vue';

// import Layout from 'components/layout/standard';
// 定义全局单页面容器组件
import Layout from 'components/layout/app';
// 全局引入Echarts组件
import ECharts from 'vue-echarts/components/ECharts.vue';

Vue.component(Layout.name, Layout);
Vue.component('v-chart', ECharts);