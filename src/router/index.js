import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          component: r => require.ensure([], () => r(require('../components/Home')), 'home')
        },
        {
          path: '/item',
          component: r => require.ensure([], () => r(require('../components/Item')), 'item')
        },
        {
          path: '/score',
          component: r => require.ensure([], () => r(require('../components/Score')), 'score')
        }
      ]
    }
  ]
});

// r => require.ensure([], () => r(require('../components/Score')), chunkName);
// 按需加载的方案，可以减少首页的渲染时间
