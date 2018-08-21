import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'
import NotFound from '@/components/NotFound'

Vue.use(Router);
// Vue.use(VueChatScroll);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) =>{
        if (to.params.name) {
          next();
        } else {
          next({name: 'Welcome'});
        }
      }
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
