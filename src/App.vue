<script setup>
import Header from '@/components/Header.vue'
import Drawer from '@/components/Drawer.vue'
import { computed, inject, onMounted, provide, reactive, ref, watch } from 'vue'
import axios from 'axios'
import Home from '@/pages/Home.vue'


const items = ref([])
const cart = ref([])

const drawerIsOpen = ref(false)
const openDrawer = () => {
  drawerIsOpen.value = true
}
const closeDrawer = () => {
  drawerIsOpen.value = false
}
const addToCart = (item) => {
  const itemIndex = cart.value.indexOf(item)
  if (item.isAdded) {
    cart.value.splice(itemIndex, 1)
    item.isAdded = false
  } else {
    cart.value.push(item)
    item.isAdded = true
  }

}
const cartTotal = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
const createOrder = async () => {
  try {
    const { data } = await axios.post(
      `https://dd20f51ba9a505dd.mokky.dev/orders`,
      { item_id: cart.item_id}
    );
    cart.value = []
    console.log(data)
  } catch (err) {
    alert(err)
  }
}

watch(cart , () => {
    items.value = items.value.map((item) => ({
      ...item,
      isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
    }))
  }, { deep: true })
watch(cart, () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }, { deep: true })


provide('cart', cart)
provide('closeDrawer', closeDrawer)
provide('addToCart', addToCart)
provide('openDrawer', openDrawer)
provide('cartTotal', cartTotal)
provide('createOrder', createOrder)
provide('items', items)

</script>

<template>
  <Drawer v-if="drawerIsOpen"/>
  <div class="bg-white w-11/12 m-auto rounded-xl shadow-xl mt-14 h-full">
    <Header :total="cartTotal" @open-drawer="openDrawer"/>
    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>
