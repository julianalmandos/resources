import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/NewEntity.vue'),
      children: [
        {
          path: 'resource',
          name: 'new-resource',
          component: () => import('./views/NewResource.vue')
        },
        {
          path: 'category',
          name: 'new-category',
          component: () => import('./views/NewCategory.vue')
        }
      ]
    },
  ]
})
