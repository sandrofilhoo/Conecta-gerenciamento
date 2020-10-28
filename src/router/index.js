import Vue from 'vue'
import VueRouter from 'vue-router'
/* import Home from '../views/Home.vue' */
import Login from '../views/Login/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard')
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import('../views/Inventory')
  },
  {
    path: "/inventory/:id",
    name: "Inventory-details",
    component: () => import("../views/Inventory/Details"),
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users')
  },
  {
    path: "/users/:id",
    name: "User-details",
    component: () => import("../views/Users/Details"),
  },
  /* {
    path: '/config',
    name: 'Config',
    component: () => import('../views/Config')
  }, */
  {
    path: '/sale-panel',
    name: 'Sale-panel',
    component: () => import('../views/SalePanel')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import('../views/Event')
  },
  {
    path: "/event/:id",
    name: "Event-details",
    component: () => import("../views/Event/Details"),
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu')
  },
  {
    path: "/menu/:id",
    name: "Menu-details",
    component: () => import("../views/Menu/Details"),
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order')
  },
  {
    path: "/order/:id",
    name: "Order-details",
    component: () => import("../views/Order/Details"),
  },
  {
    path: '/discount-coupon',
    name: 'Discount-coupon',
    component: () => import('../views/Discount-coupon')
  },
  {
    path: "/discount-coupon/:id",
    name: "Discount-coupon-details",
    component: () => import("../views/Discount-coupon/Details"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
