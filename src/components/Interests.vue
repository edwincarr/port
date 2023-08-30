<template>
  <div class="my-10 lg:my-32 px-[2%] flex flex-col items-center lg:px-[15%]">
    <h1 class="text-6xl mb-10"><b class="text-splash">Interests 🎭</b></h1>
    <div class="w-full flex flex-col gap-20">
      <div v-for="(section, index) in sections" :key="index" class="animated-section">

        <div v-if="index % 2 === 0" class="flex items-center justify-evenly">
          <img :src="section.image" class="h-40 lg:h-72 rounded-xl" />
          <div class="text-center min-w-[10rem] md:max-w-xl md:min-w-[36rem]">
            <h1 class="text-xl">{{ section.title }}</h1>
            <p class="text-left" v-html="section.content"></p>
          </div>
        </div>

        <div v-else class="flex items-center justify-evenly">
          <div class="text-center min-w-[10rem] md:max-w-xl md:min-w-[36rem]">
            <h1 class="text-xl">{{ section.title }}</h1>
            <p class="text-left" v-html="section.content"></p>
          </div>
          <img :src="section.image" class="h-40 aspect-square lg:h-72 rounded-xl" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Tommy from '@/assets/images/tommy.jpg';
import PC from '@/assets/images/pc.jpg';
import FLCL from '@/assets/images/flcl.png';
import Tacos from '@/assets/images/tacos.png';
import SciFi from '@/assets/images/scifi.jpg';
import Persona from '@/assets/images/persona.jpg';

const sections = ref([
  {
    title: "Taking Care of my son Tommy",
    content: "I adopted Tommy August 21, 2020 and he's the single greatest thing on earth.",
    image: Tommy
  },
  {
    title: "Building and fixing computers",
    content: "Started by building and upgrading my own but has evolved into building and repairing others.",
    image: PC
  },
  {
    title: "Watching and reading Anime/Manga",
    content: "Started watching Naruto as a kid and now I'm here: <a href='https://anilist.co/user/Ghostcix/animelist' target='_blank' class='text-compSplash'>Anilist</a>",
    image: FLCL
  },
  {
    title: "Cooking",
    content: "Started by trying to learn and preserve family recipes but has become something I love to experiment with from time to time.",
    image: Tacos
  },
  {
    title: "Reading novels.",
    content: "I didn't read much as a kid but am starting to get back into it.",
    image: SciFi
  },
  {
    title: "Playing video games",
    content: "I've scaled back in recent months but still enjoy sitting down and exploring a map and experiencing story-driven games.",
    image: Persona
  }
]);

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else {
      entry.target.classList.remove('slide-in');
    }
  });
};


onMounted(() => {
  const sectionsElements = document.querySelectorAll('.animated-section');

  sectionsElements.forEach((section) => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: .3,
    });

    observer.observe(section);
  });
});
</script>

<style scoped>
.animated-section {
  opacity: 0;
  /* transform: translateY(50px);  */
  transition: opacity 0.5s, transform 0.5s;
}

.slide-in {
  opacity: 1;

}

.slide-out {
  opacity: 0;

}
</style>
