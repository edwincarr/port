import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import AboutMe from '../views/AboutMe.vue'
import NotFound from '../components/404.vue'

const routes = [
  {path: '', name: 'Home', component: Home},
  {path: '/blog', name: 'Blog', component: Blog},
  {path: '/about', name: 'AboutMe', component: AboutMe},
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
