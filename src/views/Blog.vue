<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import { store } from '../plugins/store';
import PostModal from '../components/PostModal.vue';

</script>

<template>
  <div class="min-h-full">
    <Nav />
    <div class="flex flex-col justify-center items-center my-20 gap-5">
      <h1 class="text-9xl "><b class="text-splash">Blog</b></h1>
      <p class="text-2xl text-center">The one stop shop for my documented failures.</p>
    </div>
      <div class=" flex flex-col items-center md:px-[10%] gap-10 min-h-[30rem]">
        <PostModal v-for="blog in store.blogs" :title="blog.title" :posted="blog.posted" :blurb="blog.blurb" :content="blog.content" :preview="blog.preview" :key="blog.id"/>
      </div>
    <Footer />
  </div>
</template>
