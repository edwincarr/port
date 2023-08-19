<script setup>
import { RouterView } from "vue-router"
import { isDarkMode } from './utils/LightSwitch'
import { onMounted } from 'vue';

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
    document.body.style.backgroundColor = '#1a1a1a'
  } else {
    isDarkMode.value = false;
    document.body.style.backgroundColor = '#ede7de'
  }
})
</script>

<template>
  <div :class="isDarkMode ? 'dark' : ''">
    <RouterView class='bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-200'/>
  </div>
</template>
