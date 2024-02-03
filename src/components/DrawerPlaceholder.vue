<script setup>

import CartItemList from '@/components/CartItemList.vue'
import { inject } from 'vue'
const closeDrawer = inject('closeDrawer')
</script>

<template>
  <div class="fixed bg-white top-0 right-0 h-full w-96 z-20 p-8">
    <h2 class="font-bold text-2xl">Cart</h2>
    <div class="flex flex-col gap-6 items-center justify-center h-full pb-32">
      <img class="w-2/5" src="/package-icon.png" alt="Package">
      <b class="text-center text-xl">The cart is empty!</b>
      <p class="opacity-40 text-center text-black text-base font-normal leading-normal">Add at least one pair <br> of sneakers to complete your order.</p>
      <button
        class="
          bg-lime-500
          text-white
          w-full
          rounded-2xl
          p-3
          disabled:bg-gray-300
          disabled:cursor-default
          transition
          hover:bg-lime-600
          cursor-pointer"
        @click="closeDrawer"
      >
        <img class="absolute size-4 rotate-180 inline left-16 mt-1" src="/arrow-next.svg" alt="Close">
        Back to Shop
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>