'use strict';
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: ['app/web/page'],
    exclude: ['app/web/page/[a-z]+/components', 'app/web/page/test'],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js',
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.js',
    client: 'app/web/framework/vue/entry/client.js',
    // app: 'app/web/framework/vue/app.js',
    assets: 'app/web/assets',
    components: 'app/web/components',
    framework: 'app/web/framework',
    vue: 'vue/dist/vue.esm.js',
    '@': 'app/web'
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync', 'element-ui'],
  loaders: {
    eslint: { options: { fix: true } }
  },
  plugins: {
    serviceworker: true,
  },
  done() {

  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'url-loader',
        exclude: [resolve('/app/web/icons/')],
        options: {
          limit: 1024
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('/app/web/icons/')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   include: [
      //     resolve('app'),
      //     resolve('node_modules/vue-echarts'),
      //     resolve('node_modules/resize-detector')
      //   ]
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [
          // resolve('app'),
          resolve('node_modules/vue-echarts'),
          resolve('node_modules/resize-detector')
        ]
      }
    ]
  },
  // transpileDependencies: [
  //   resolve('node_modules/vue-echarts'),
  //   resolve('node_modules/resize-detector'),
  // ]
};