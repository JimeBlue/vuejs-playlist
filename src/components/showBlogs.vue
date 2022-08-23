<template>
  <!-- EXPLANATION: In Vue we have directives like v-if, v-on, v-show, etc.
 we can also create out custome directives so that Vue does something that we want.
 Watch net ninja Vue 2 tutorial, video #35 
 (https://www.youtube.com/watch?v=o8UspKnsV_0&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=36), 
 to see how custome directives are created and how they work.  -->
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <!-- IMPORTANT: don´t pay attention to errors in <li>, it´s just because there is no key binding -->
    <div v-for="blog in blogs" class="single-blog">
      <h2 v-rainbow>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  methods: {},
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
