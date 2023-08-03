<script setup>
import { ref } from 'vue'
import { StructuredText } from 'vue-datocms';

const open = ref(false)

defineProps({ title:String, posted:Date, blurb:String, preview:String, content:Object})

</script>

<template>
  <div @click="open = true" class="cursor-pointer flex items-center justify-between border rounded-xl p-3 w-screen md:w-[70%] md:py-7">
    <div>
      <div class="flex gap-1 items-end">
        <h1 class="text-2xl max-w-xs">{{ title }}</h1>
        <p class="text-sm">{{ posted }}</p>
      </div>
      <p class="max-md:hidden">{{ blurb }}</p>
    </div>
    <p class="rounded-full p-3 bg-dark bg-opacity-30 dark:bg-light dark:bg-opacity-30 md:text-2xl">{{ preview }}</p>
  </div>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <StructuredText :data="content"/>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: absolute;
  z-index: 999;
  top: 0%;
  background-color: aqua;
}
</style>
