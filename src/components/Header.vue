<script setup>
import { inject } from 'vue'

const openDrawer = inject('openDrawer')

defineProps({
  total: Number
})

</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-12 py-6 shadow-sm">
    <router-link to="/">
      <div class="flex items-center gap-4 cursor-pointer">
        <img src="/logo.png" alt="Logo" class="w-10">
        <div >
          <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-500">Best sneakers in the world</p>
        </div>
      </div>
    </router-link>


    <ul class="flex items-center gap-6">
      <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black" @click="openDrawer">
        <img src="/cart.svg" alt="Cart">
        <b>{{ total }} $</b>
      </li>
      <router-link to="/favorites">
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/heart.svg" alt="Heart">
          <span>Favorites</span>
        </li>
      </router-link>
      <router-link to="/profile">
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/profile.svg" alt="Profile">
          <span>Profile</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>

<style scoped>

</style>