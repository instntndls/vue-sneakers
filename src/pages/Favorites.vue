<script setup>
import CardList from '@/components/CardList.vue'
import axios from 'axios'
import { inject, onMounted, ref } from 'vue'
import FavoritesPlaceholder from '@/components/FavoritesPlaceholder.vue'

const favorites = ref([])
onMounted( async () => {
  try {
    const { data } = await axios.get(`https://dd20f51ba9a505dd.mokky.dev/favorites?_relations=items`)
    favorites.value = data.map((favorites) => favorites.item)
  }
  catch (err) { console.log(err) }
})
const noItems = () => {
  return favorites.value.length <= 0;
}


</script>

<template>
  <h2 class="text-3xl font-bold">Favorites</h2>
  <div class="py-8">
    <CardList :items="favorites" v-if="!noItems()"/>
    <FavoritesPlaceholder v-else/>
  </div>
</template>