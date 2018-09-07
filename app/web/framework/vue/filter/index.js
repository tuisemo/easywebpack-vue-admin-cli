import Vue from 'vue';
// import manba from 'manba';

/**
 * 去掉HTML标签
 */
Vue.filter('removeHtml', input => {
  return input && input.replace(/<(?:.|\n)*?>/gm, '')
    .replace(/(&rdquo;)/g, '\"')
    .replace(/&ldquo;/g, '\"')
    .replace(/&mdash;/g, '-')
    .replace(/&nbsp;/g, '')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/<[\w\s"':=\/]*/, '');
});
/**
 * 时间戳转换
 */
// Vue.filter('formatDate', (input, config = '') => {
//   return manba(input).format(config);
// });

