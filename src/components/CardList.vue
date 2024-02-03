<script setup>
import { inject } from 'vue'
import Card from '@/components/Card.vue'

defineProps({
  items: Array
})

const addToFavorite = inject('addToFavorite')
const addToCart = inject('addToCart')
</script>

<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <Card
      v-for="item in items"
      :id="item.id"
      :title="item.title"
      :price="item.price"
      :image-url="item.imageUrl"
      :on-click-add="() => addToCart(item)"
      :on-click-favorite="() => addToFavorite(item)"
      :isAdded="item.isAdded"
      :isFavorite="item.isFavorite" />
  </div>
</template>
