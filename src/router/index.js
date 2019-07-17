import Vue from 'vue'
import Router from 'vue-router'
import Application from '../components/Application/Application'
import release from '../components/release/release'
import pirce from '../components/pirce/pirce'
import withdrawal from '../components/withdrawal/withdrawal'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
