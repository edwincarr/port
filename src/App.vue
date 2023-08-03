<script setup>
import { RouterView } from "vue-router"
import { isDarkMode } from './utils/LightSwitch'
import { ref, onMounted } from 'vue';
import { updateBlogs } from './plugins/store'

import { request } from './utils/datocms';

const blogPosts = ref([])
const error = ref(null)
const loading = ref(true)

const query = `
{
  allBlogs {
    id
    title
    posted
    blurb
    content {
      value
    }
    preview
  }
}
`

onMounted(async () => {
  try {
    blogPosts.value = await request({
      query,
      variables: {
        limit: 10
      }
    });
    updateBlogs(blogPosts)
  } catch (e) {
    error.value = e;
  }
  loading.value = false;

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
  } else {
    isDarkMode.value = false;
  }
})
</script>

<template>
  <div :class="isDarkMode ? 'dark' : ''">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error</div>
    <RouterView v-else class='bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-200'/>
  </div>
</template>
