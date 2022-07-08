import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/views/login.vue')
  }, {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/views/index.vue')
  }, {
    path: '/vueUse',
    name: 'VueUse',
    meta: {
      title: '鼠标1',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/views/vueUse.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router