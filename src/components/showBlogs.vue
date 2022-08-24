<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <!-- IMPORTANT: don´t pay attention to errors in <li>, it´s just because there is no key binding -->
    <!-- EXPLANATION: filters are use to change the way our data looks when we output it to 
      the browser. For example, we can make our data to be uppercase. Watch the net ninja vue2 
      tutorial video #35 to learn how to use them
      (https://www.youtube.com/watch?v=o8UspKnsV_0&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=37) -->
    <div v-for="blog in blogs" class="single-blog">
      <h2 v-rainbow | to-uppercase>{{ blog.title }}</h2>
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
