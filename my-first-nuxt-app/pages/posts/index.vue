<template>
  <div class="posts-page">
    <section class="posts">
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
      <PostPreview
        id="1"
        thumbnail=""
        title= "Hello there!"
        previewText="This is my first post"
        />
        <h1>whats happening</h1>
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
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

