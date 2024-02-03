<script setup>
const props = defineProps ({
  id: Number,
  title: String,
  price: Number,
  isAdded: Boolean,
  isFavorite: Boolean,
  imageUrl: String,
  onClickFavorite: Function,
  onClickAdd: Function
})
</script>

<template>
  <div class="
    relative
    bg-white
    border
    border-slate-100
    rounded-3xl
    p-8
    cursor-pointer
    transition
    hover:-translate-y-0.5
    hover:shadow-xl">
      <img :src="isFavorite ? '/like-2.svg' : '/like-1.svg'" alt="Like"
           class="absolute top-8 left-8 shadow-sm rounded-md" @click="onClickFavorite"/>

      <img class="w-full" :src="imageUrl" alt="Sneaker"/>

      <p class="mt-2">{{title}}</p>

      <div class="flex justify-between mt-5 ">

        <div class="flex flex-col">
          <span class="text-slate-400">Price:</span>
          <b>{{price}} rub.</b>
        </div>

        <img :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="Plus"
             class="h-max shadow-sm rounded-md" @click="onClickAdd"/>
      </div>
  </div>
</template>

<style scoped>

</style>