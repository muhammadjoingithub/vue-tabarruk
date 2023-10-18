import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "LLayout",
      component: () => import( "@/components/LLayout.vue"),
      children:[
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/components/Default.vue')
        },
        {
          path: '/help',
          name: 'Help',
          component: () => import('@/components/CHelp.vue')
        },

      ]
    },
  
  ]
})

export default router
