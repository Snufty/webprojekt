import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Admin from '../views/Admin.vue'
import AddNewItems from '../components/admin/AddNewItems.vue'
import Login from '../components/admin/Login.vue'
import Exercise from '../views/Exercise.vue'
import Indi_exercise from '../views/Indi_exercise.vue'


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
      path: '/Exercise/:uuid',
      name: 'Exercise',
      component: Exercise
    },
    {
      path: '/Indi_exercise',
      name: 'Indi_exercise',
      component: Indi_exercise
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
