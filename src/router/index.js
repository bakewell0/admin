import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import addnews from '@/pages/addnews'
import addproduct from '@/pages/addproduct'
import newslist from '@/pages/newslist'
import productlist from '@/pages/productlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/addnews',
      name: 'addnews',
      component: addnews
    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: addproduct
    },
    {
      path: '/newslist',
      name: 'newslist',
      component: newslist
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: productlist
    }
  ]
})
