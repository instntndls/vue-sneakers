<script setup>

</script>

<template>
  <div class="flex flex-col gap-6 items-center justify-center h-full py-24">
    <img class="w-24" src="/emoji-2.png" alt="Package">
    <b class="text-center text-xl">No profile</b>
    <p class="opacity-40 text-center text-black text-base font-normal leading-normal pb-4">Create a new profile to <br> see your favorites and orders.</p>
    <router-link to="/">
      <button
        class="
          bg-lime-500
          text-white
          w-80
          rounded-2xl
          p-3
          disabled:bg-gray-300
          disabled:cursor-default
          transition
          hover:bg-lime-600
          cursor-pointer"
        @click=""
      >
        Back to Shop
      </button>
    </router-link>
  </div>
</template>

<style scoped>

</style>