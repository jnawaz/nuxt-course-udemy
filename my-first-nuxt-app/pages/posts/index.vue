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
  asyncData(context) {
    return new Promise((resolve, reject) => {
      // resolve = success, reject = error
    }).then(data => {
        return data
    }).catch(e => {
      context.error(new Error())
    })
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

