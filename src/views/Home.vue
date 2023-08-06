<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Skills from '../components/Skills.vue';
import Education from '../components/Education.vue'
</script>

<template>
  <div>
    <Nav />
      <div class="flex flex-col px-[5%]">
        <div class="py-20 md:px-[19%] md:pt-[10%]">
          <h1 class="cursor-default text-5xl md:text-center" id='intro'>Hi, I'm <b class="text-splash cursor-wait">Edwin Carrillo</b> 👋 - Software Developer based in Columbus, Ohio.</h1>
        </div>
        <div class="flex gap-x-20 gap-y-12 flex-wrap md:mt-[5%] justify-center">
          <Skills/>
          <Education />
        </div>
      </div>
    <Footer />
  </div>
</template>
