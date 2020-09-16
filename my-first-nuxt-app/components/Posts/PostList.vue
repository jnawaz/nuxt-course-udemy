<template>
  <div class="posts-page">
    <section class="posts">
      <PostPreview
        id="1"
        thumbnail="https://static.pexels.com/photos/270348/pexels-photo-"
        title= "Hello there!"
        previewText="This is my first post"
        />
      <PostPreview
        id="1"
        thumbnail=""
        title= "Hello there!"
        previewText="This is my first post"
        />
      <PostPreview
        id="1"
        thumbnail=""
        title= "Hello there!"
        previewText="This is my first post"
        />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
