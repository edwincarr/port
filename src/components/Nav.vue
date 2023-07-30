<script setup>
import { toggleDarkMode } from '../utils/LightSwitch';
import { isDarkMode } from '../utils/LightSwitch';
</script>

<template>
  <div class="flex h-14 items-center px-14 justify-end gap-10 border-b dark:border-zinc-700">
    <ul class="flex gap-4 text-lg group">
      <RouterLink to='/' class='hover:text-zinc-400 group-hover:transition-colors group-hover:duration-500'>Home</RouterLink>
      <RouterLink to='/blog' class='hover:text-zinc-400 group-hover:transition-colors group-hover:duration-500'>Blog</RouterLink>
      <RouterLink to='/about' class='hover:text-zinc-400 group-hover:transition-colors group-hover:duration-500'>About Me</RouterLink>
    </ul>
    <button @click="toggleDarkMode">
      <v-icon v-if='isDarkMode' name='md-lightmode' scale="1.4"/>
      <v-icon v-else='isDarkMode' name='md-darkmode' fill='#262626' scale="1.4"/>
    </button>
  </div>
</template>
