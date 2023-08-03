<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import { store } from '../plugins/store';

</script>

<template>
  <div>
    <Nav />
      <div v-for="blog in store.blogs">
        <div>{{ blog.title }}</div>
      </div>
    <Footer />
  </div>
</template>
