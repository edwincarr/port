<script setup>
import { ref, h } from 'vue'
import { StructuredText, Image } from 'vue-datocms';

const open = ref(false)

defineProps({ title:String, posted:String, blurb:String, preview:String, content:Object})

const closeModal = (event) => {
  if(event.target.classList.contains('modal')) {
    open.value = false;
  }
}

const renderBlock = ({ record }) => {
  switch (record.__typename) {
    case 'ImageRecord':
      return h(Image, {
        data: record.image.responsiveImage,
        class: 'w-fit self-center',
        priority: true
      });
    default:
      return null;
  }
};

</script>

<template>
  <div @click="open = true" class="cursor-pointer flex items-center justify-between border border-dark rounded-xl p-3 w-screen lg:w-[70%] lg:py-7 lg:px-10 dark:border-light">
    <div>
      <div class="flex gap-1 items-end">
        <h1 class="text-2xl max-w-xs">{{ title }}</h1>
        <p class="text-sm">{{ posted }}</p>
      </div>
      <p class="max-lg:hidden">{{ blurb }}</p>
    </div>
    <p class="rounded-full p-3 bg-dark bg-opacity-30 dark:bg-light dark:bg-opacity-30 lg:text-2xl">{{ preview }}</p>
  </div>

    <div v-if="open" class="modal bg-black bg-opacity-20 py-10 " @click="closeModal">
      <div class="px-10 lg:mx-[23%] lg:text-2xl max-w-fit z-[9999] rounded-2xl dark:bg-dark bg-light">
        <div class="md:flex items-center justify-evenly">
          <h1 class="text-5xl mb-10 pt-10"><b class="text-compSplash">{{ title }}</b></h1>
          <p class="text-xl max-md:mb-10">{{ posted }}</p>
        </div>
        <StructuredText :data="content" :renderBlock="renderBlock" class="flex flex-col gap-5"/>
        <button @click="open = false" class="my-14">Close</button>
      </div>
    </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 0%;
}
:deep(h2) {
  font-size:xx-large;
  font-weight: bold;
  margin-top: 20px;
}
</style>
