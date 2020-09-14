<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <section class="featured-posts">
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
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview: PostPreview
  }
}
</script>
