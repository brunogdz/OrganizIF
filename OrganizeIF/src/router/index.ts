import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Lists from '../views/Lists.vue';
import All from '../views/All.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/lists'
  },
  {
    path: '/lists',
    name: 'Lists',
    component: Lists
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/all',
    name: 'All',
    component: All
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
