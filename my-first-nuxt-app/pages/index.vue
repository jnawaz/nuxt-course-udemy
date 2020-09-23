<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList: PostList
  },
  asyncData(context, callback) { // executed on the server and waits for task to finish and only calls in pages
    setTimeout(() => {
      callback(null, {
loadedPosts: [
        {id: '1', title: "My first post", previewText: "My first post preview", thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"},
        {id: '2', title: "My second post", previewText: "My second post preview", thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"}
      ]
      });

    }, 1500);
    },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  created() {
    //happens on client and not the server side

  }
}
</script>
