<script setup>
import { toggleDarkMode } from '../utils/LightSwitch';
import { isDarkMode } from '../utils/LightSwitch';
</script>

<template>
  <div class="flex h-12 items-center">
    <ul class="flex gap-4 text-lg">
      <RouterLink to='/'>Home</RouterLink>
      <RouterLink to='/blog'>Blog</RouterLink>
      <RouterLink to='/about'>About Me</RouterLink>
    </ul>
    <button @click="toggleDarkMode">
      <v-icon v-if='isDarkMode' name='md-lightmode' scale="1.5"/>
      <v-icon v-else='isDarkMode' name='md-nightlight' scale="1.5"/>
    </button>
  </div>
</template>
