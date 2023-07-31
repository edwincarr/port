<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Intro from '../components/Intro.vue';
import Skills from '../components/Skills.vue';
import Education from '../components/Education.vue'
</script>

<template>
  <div>
    <Nav />
      <div class="flex flex-col px-[5%]">
        <Intro />
        <div class="flex gap-x-20 gap-y-12 flex-wrap md:mt-[5%] justify-center">
          <Skills/>
          <Education />
        </div>
      </div>
    <Footer />
  </div>
</template>
