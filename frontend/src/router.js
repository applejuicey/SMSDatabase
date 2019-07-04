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
      path: '/classify',
      name: 'classify',
      component: () => import('./views/Classify.vue')
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
      path: '/metabolite/search',
      name: 'search-metabolite',
      component: () => import('./views/MetaboliteSearch.vue')
    },
    {
      path: '/metabolite/manage',
      name: 'manage-metabolite',
      component: () => import('./views/MetaboliteManage.vue')
    },
    {
      path: '/metabolite/add',
      name: 'add-metabolite',
      component: () => import('./views/MetaboliteAdd.vue'),
    },
    {
      path: '/metabolite/add-batch',
      name: 'add-metabolite-batch',
      component: () => import('./views/MetaboliteAddBatch.vue'),
    },
    {
      path: '/metabolite/view/:uniqueID',
      name: 'view-metabolite',
      component: () => import('./views/MetaboliteView.vue'),
    },
    {
      path: '/metabolite/edit/:uniqueID',
      name: 'edit-metabolite',
      component: () => import('./views/MetaboliteEdit.vue'),
    },
    {
      path: '/metabolite/delete/:uniqueID',
      name: 'delete-metabolite',
      component: () => import('./views/MetaboliteDelete.vue'),
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: PageNotFound
    },
  ]
})
