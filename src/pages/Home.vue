<script setup>
import CardList from '@/components/CardList.vue'
import { inject, reactive, provide, watch, onMounted } from 'vue'
import axios from 'axios'

const cart = inject('cart')

const items = inject('items')

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      item.isFavorite = true;
      const { data } = await axios.post(
        `https://dd20f51ba9a505dd.mokky.dev/favorites`,
        { item_id: item.id }
      );
      item.favoriteId = data.id;
    } else {
      item.isFavorite = false;
      await axios.delete(
        `https://dd20f51ba9a505dd.mokky.dev/favorites/${item.favoriteId}`
      );
      item.favoriteId = null;
    }
  } catch (err) {
    console.log(err);
  }
};

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://dd20f51ba9a505dd.mokky.dev/favorites`);

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

      return favorite
        ? { ...item, isFavorite: true, favoriteId: favorite.id}
        : item;
    });
  } catch (err) {
    console.log(err);
  }
};

const fetchItems = async () => {
  try {
    const { data } = await axios
      .get(`https://dd20f51ba9a505dd.mokky.dev/items?title=*${filters.searchQuery}*&sortBy=${filters.sortBy}`)

    items.value = data
  } catch (err){ console.log(err)}
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
  const localCart = localStorage.getItem('cart')

  cart.value = localCart ? JSON.parse(localCart) : []
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))

})

const filters = reactive({
  sortBy: '',
  searchQuery: ''
})
const onChangeSelect = event => {
  filters.sortBy = event.target.value
}
const onInput = event => {
  filters.searchQuery = event.target.value
}

watch(filters, fetchItems)

provide('filters', filters)
provide('addToFavorite', addToFavorite)

</script>

<template>
  <div class="flex justify-between items-center mb-8">
    <h2 class="text-3xl font-bold">All items</h2>

    <div class="flex gap-4">
      <div class="py-2 px-3 border rounded-md outline-0 hover:border-slate-400">
        <select @change="onChangeSelect" class="outline-0">
          <option value="name">Name</option>
          <option value="price">Price (Low to High)</option>
          <option value="-price">Price (High to Low)</option>
        </select>
      </div>


      <div class="relative">
        <img class="absolute top-3 left-4" src="/search.svg" alt="Search">
        <input
          @keyup.enter="onInput"
          class="border border-slate-200 rounded-md py-2 pl-10 pr-4 outline-0 focus:border-slate-400"
          type="text"
          placeholder="Search..."
        >
      </div>
    </div>

  </div>

  <CardList :items="items"/>
</template>