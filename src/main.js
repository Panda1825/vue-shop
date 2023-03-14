import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import store from './store/index'
import router from './router/index'
import  'amfe-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title}`;
  next()
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
