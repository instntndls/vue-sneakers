import './assets/main.css'

import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import Home from '@/pages/Home.vue'
import Favorites from '@/pages/Favorites.vue'
import Profile from '@/pages/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/favorites', component: Favorites },
  { path: '/profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory('vue-sneakers'),
  routes,
})

const app = createApp(App)

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
