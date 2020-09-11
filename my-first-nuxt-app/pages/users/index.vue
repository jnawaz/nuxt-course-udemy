<template>
  <div>
    <h1>This is the users page</h1>
    <!-- v-model binds the input to userId -->
    <input type="text" v-model="userId"> 
    <!-- @click is the vue directive to call a function on click of the button -->
    <button @click="onLoadUser">Load user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push("users/" + this.userId)
    }
  }
}
</script>