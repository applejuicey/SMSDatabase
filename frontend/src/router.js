import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/smsd/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/compound/:id',
      name: 'compound',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "compound" */ './views/Compound.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue')
    },
    {
      path: '/admin',
      component: () => import('./views/Admin.vue'),
      children: [
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('./views/AdminUsers.vue'),
        },
        {
          path: 'compounds',
          name: 'admin-compounds',
          component: () => import('./views/AdminCompounds.vue'),
        },
      ],
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: PageNotFound
    },
  ]
})
