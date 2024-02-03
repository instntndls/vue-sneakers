import './assets/main.css'

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import Home from '@/pages/Home.vue'
import Favorites from '@/pages/Favorites.vue'
import Profile from '@/pages/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: 'vue-sneakers/favorites', component: Favorites },
  { path: 'vue-sneakers/profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
