import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import second from './components/second.vue'
import HelloWorld from './components/HelloWorld.vue'
Vue.use(ElementUI)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/hello',
      component: HelloWorld
    },{
      path: '/second',
      component: second
    }
  ]
})

new Vue({
  router:router,
  el: '#app',
  render: h => h(App)
})

