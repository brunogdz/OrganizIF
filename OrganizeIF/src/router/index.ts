import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Lists from '../views/Lists.vue';
import All from '../views/All.vue';
import Work from '../views/Work.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Lists'
  },
  {
    path: '/Lists',
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
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
