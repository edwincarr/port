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
      <div class="flex flex-col px-[5%] md:px-[15%] md:py-[10%]">
        <Intro />
        <div class=" flex flex-col md:flex-row md:mt-[10%] justify-evenly gap-10">
          <Skills/>
          <Education />
        </div>
      </div>
    <Footer />
  </div>
</template>
