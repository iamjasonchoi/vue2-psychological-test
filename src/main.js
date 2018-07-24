import Vue from 'vue';
import App from './App';
import router from './router'; // 路由文件
import store from './store'; // 状态管理
import './assets/css/common.less'
import './assets/js/rem'
import './assets/js/ajax'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
