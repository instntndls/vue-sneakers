<script setup>

import { inject } from 'vue'

defineProps({
  item: Object,
  id: Number,
  title: String,
  price: Number,
  imageUrl: String,
})
const addToCart = inject('addToCart')
const cart = inject('cart')
</script>

<template>
  <div class="flex items-center border border-slate-200 p-4 rounded-2xl gap-4" >
    <img :src="imageUrl" alt="Sneaker" class="size-16"/>

    <div class="flex flex-col w-full gap-4">
      <p>{{ title }}</p>

      <div class="flex justify-between ">
        <b>{{ price }} rub.</b>
        <img class="cursor-pointer" src="/close.svg" alt="Close" @click ="addToCart(item)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>