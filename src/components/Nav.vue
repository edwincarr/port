<script setup>
import { RouterLink } from 'vue-router';
import { toggleDarkMode } from '../utils/LightSwitch';
import { isDarkMode } from '../utils/LightSwitch';
</script>

<template>
  <div class="flex h-14 items-center justify-between gap-8 px-[10%]">
    <ul class="flex gap-8 text-lg group">
      <RouterLink to='/' class='hover:text-splash group-hover:transition-colors group-hover:duration-500'>Home</RouterLink>
      <RouterLink to='/blog' class='hover:text-splash group-hover:transition-colors group-hover:duration-500'>Blog</RouterLink>
      <RouterLink to='/about' class='hover:text-splash group-hover:transition-colors group-hover:duration-500'>About</RouterLink>
    </ul>
    <div class="flex gap-8 text-lg">
      <a href="https://edwinc.tech/resume.pdf" target="_blank" class='hover:text-splash'>Resume</a>
      <button @click="toggleDarkMode" class="hover:text-splash transition duration-200">
        <v-icon v-if='isDarkMode' name='md-lightmode' scale="1.4"/>
        <v-icon v-else='isDarkMode' name='md-darkmode' scale="1.4"/>
      </button>
    </div>
  </div>
</template>
