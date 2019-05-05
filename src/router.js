import VueRouter from 'vue-router'

import Home from './components/Home';
import User from './components/UserProfile';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
});

export default router
