import { reactive } from 'vue'

const store = reactive({
  blogs: [],
})
const updateBlogs = (blogs) => {
  store.blogs=blogs.value.allBlogs
}
export { store, updateBlogs}
