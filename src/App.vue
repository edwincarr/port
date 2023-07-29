<script setup>
import { RouterView } from "vue-router"
import { onMounted } from 'vue';
import { isDarkMode } from './utils/LightSwitch'

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
  } else {
    isDarkMode.value = false;
  }
})
</script>

<template>
  <div :class="isDarkMode ? 'dark' : ''">
    <RouterView/>
  </div>
</template>
