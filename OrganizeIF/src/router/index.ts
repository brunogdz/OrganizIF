import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Lists from '../views/Lists.vue';
import All from '../views/All.vue';
import Work from '../views/Work.vue';
import Ideas from '../views/Ideas.vue';
import Music from '../views/Music.vue';
import Read from '../views/Read.vue';
import Scheduler from '../views/Scheduler.vue';
import Shopping from '../views/Shopping.vue';
import Study from '../views/Study.vue';
import Travel from '../views/Travel.vue';
import PageTeste from '../views/PageTeste.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Lists'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
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
  },
  {
    path: '/ideas',
    name: 'Ideas',
    component: Ideas
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/read',
    name: 'Read',
    component: Read
  },
  {
    path: '/scheduler',
    name: 'Scheduler',
    component: Scheduler
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/study',
    name: 'Study',
    component: Study
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/pageteste',
    name: 'PageTeste',
    component: PageTeste
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
