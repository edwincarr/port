<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Blog1 from '../assets/blogs/text.md'

console.log(Blog1)
</script>

<template>
  <div>
    <Nav />
      <div class="h-screen" v-html="Blog1">
      </div>
    <Footer />
  </div>
</template>
