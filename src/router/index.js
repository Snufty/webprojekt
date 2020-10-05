import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Admin from '../views/Admin.vue'
import AddNewItems from '../components/admin/AddNewItems.vue'
import Login from '../components/admin/Login.vue'
import Legs from '../views/Legs.vue'
import squat from '../views/squat.vue'

import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/AddNew',
      name: 'AddNew',
      component: AddNewItems,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/Legs',
      name: 'Legs',
      component: Legs
    },
    {
      path: '/squat',
      name: 'squat',
      component: squat
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('login');
  else next();
});

export default router;
