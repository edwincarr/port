import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {path: '', name: 'Home', component: () => import('../views/Home.vue')},
  {path: '/blog', name: 'Blog', component: () => import('../views/Blog.vue')},
  {path: '/about', name: 'AboutMe', component: () => import('../views/AboutMe.vue')},
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../components/404.vue') },
]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
