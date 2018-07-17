import Vue from 'vue'
import Router from 'vue-router'
import Cat from '@/components/cat'
import Dog from '@/components/dog'
import Xiao from '@/components/xiao'
import Shui from '@/components/shui'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cat',
      component: Cat
    },
    {
      path:'/dog',
      name:'dog',
      component:Dog
    },
    {
      path:'/xiao',
      name:'xiao',
      component:Xiao
    },
    {
      path:'/shui',
      name:'shui',
      component:Shui 
    }
  ],
  mode:'history'
})