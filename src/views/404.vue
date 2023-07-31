<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';
</script>

<template>
  <div class="h-full">
    <Nav />
    <div class="flex flex-col justify-center items-center h-[77vh]">
      <b class="text-9xl">404</b>
      <p class="mb-4 text-xl w-96 text-center"><i>edwinc.tech{{ $route.fullPath }}</i> does not currently exist. feel free to roam anywhere else but here</p>
      <RouterLink to='/' class="py-3 px-5 rounded-2xl bg-dark text-light dark:bg-light dark:text-dark">Home</RouterLink>
    </div>
    <Footer />
  </div>
</template>
