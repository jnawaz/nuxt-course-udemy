<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  fetch(context) {
    return new Promise((resolve, reject) => {
      // resolve = success, reject = error
    }).then(data => {
        context.store.commit('setPosts', data.loadedPosts)
    }).catch(e => {
      context.error(new Error())
    })
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

