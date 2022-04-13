<!-- Author: Aquino, Neo
     File: blog.vue
     Description: Add another component named "Blog" and input the below code. -->

<template>
  <div class="blog">
    <h1>BLOG</h1>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data () {
      return {
        title: 'Blog'
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-family: 'Poppins';
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
  }
</style>
