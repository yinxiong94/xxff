import Vue from 'vue'
import Router from 'vue-router'
import Application from '../components/Application/Application'
import release from '../components/release/release'
import pirce from '../components/pirce/pirce'
import withdrawal from '../components/withdrawal/withdrawal'
import modify from '../components/withdrawal/modify'
import payment from '../components/withdrawal/payment'
import news from '../components/withdrawal/news'
import details from '../components/withdrawal/details'
import Overview from '../components/withdrawal/Overview'
import Login from '../components/Login'
import register from '../components/register'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/Application',
      name: 'Application',
      component: Application
    },
    {
      path: '/release',
      name: 'release',
      component: release
    },
    {
      path: '/pirce',
      name: 'pirce',
      component: pirce
    },
    {
      path: '/withdrawal',
      name: 'withdrawal',
      component: withdrawal
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/Overview',
      name: 'Overview',
      component: Overview
    }
  ]
})
