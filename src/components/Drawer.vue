<script setup>
import CartItemList from '@/components/CartItemList.vue'
import { inject, ref } from 'vue'
import DrawerPlaceholder from '@/components/DrawerPlaceholder.vue'

const closeDrawer = inject('closeDrawer')
const cartTotal = inject('cartTotal')
const createOrder = inject('createOrder')

const noItems = () => {
  if (cartTotal.value === 0){
    return true
  }
  else {
    return false
  }
}

</script>

<template>
  <div @click="closeDrawer" class="fixed top-0 left-0 bg-black h-full w-full z-10 opacity-70"></div>

  <div v-if="!noItems()" class="fixed bg-white top-0 right-0 h-full w-96 z-20 p-8">
    <h2 class="font-bold text-2xl mb-5">Cart</h2>
    <CartItemList/>

    <div class="flex flex-col gap-4 mb-6 mt-6">
      <div class="flex justify-between p-1">
        <span>Total:</span>
        <b>{{ cartTotal }} $</b>
      </div>

      <div class="flex justify-between p-1">
        <span>Tax (5%):</span>
        <b>{{  Math.round(cartTotal * 0.05)}} $</b>
      </div>

      <button
        :disabled="cartTotal <= 0"
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
        @click="createOrder"
      >
        Proceed to Checkout
      </button>
    </div>
  </div>

  <DrawerPlaceholder v-if="noItems()"/>
</template>

<style scoped>

</style>