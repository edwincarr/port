<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import { store } from '../plugins/store';
import PostModal from '../components/PostModal.vue';
import { ref, onMounted } from 'vue';
import { updateBlogs } from '../plugins/store'
import { gql } from "graphql-request";

import { request } from '../utils/datocms';

const blogPosts = ref([])
const error = ref(null)
const loading = ref(true)

const query = gql`
{
  allBlogs {
    id
    title
    posted
    blurb
    content {
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          image {
            responsiveImage {
              src
              width
              height
              alt
              title
              base64
            }
          }
        }
      }
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
})
</script>

<template>
  <div>
    <Nav />
    <div v-if="loading">
      <div class="flex flex-col justify-center items-center my-20 gap-5">
        <h1 class="text-9xl "><b class="text-splash">Blog</b></h1>
        <p class="text-2xl text-center">The one stop shop for my documented failures.</p>
      </div>
    </div>
  <div v-else-if="error"></div>
    <div v-else class="flex flex-col justify-center items-center my-20 gap-5">
      <h1 class="text-9xl "><b class="text-splash">Blog</b></h1>
      <p class="text-2xl text-center">The one stop shop for my documented failures.</p>
    </div>
    <div class=" flex flex-col items-center md:px-[10%] gap-10 min-h-[30rem]">
      <PostModal v-for="blog in store.blogs" :title="blog.title" :posted="blog.posted" :blurb="blog.blurb" :content="blog.content" :preview="blog.preview" :key="blog.id"/>
    </div>
    <Footer />
  </div>
</template>
