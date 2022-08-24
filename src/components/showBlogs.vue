<template>
  <!-- EXPLANATION: create a filter input so that the user can search the posts that
  include the word typed in the filter -->
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <!-- 1) Create a input where the user can type a word to filter the data.
    Using the v-model directive, store the whatever the user types in a 
    variable called "search" -->
    <input type="text" v-model="search" placeholder="search blogs" />
    <!-- 7) Now, instead of looping throung blogs I have to loop through the 
    array with the filtered data, i.e  filteredBlogs-->
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2>{{ blog.title | (to - uppercase) }}</h2>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      /* 2) Add the variable "search" to store whatever the user types in
      the filter input*/
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  /* 3) Create the filter functionallity inside a computed property, 
   because the filtered data depends on my original data*/
  computed: {
    /* 4) Create a function called "filteredBlogs", which will return an array
    with the filtered data */
    filteredBlogs: function() {
      /* 5)Use the filter method to filter the data, i.e to filter the blogs */
      return this.blogs.filter(blog => {
        /* 6)For every blog, the filter method checks if the blog´s title 
        matched whatever the user typed in the filter input (this.search).
        If it is true, it keeps it, and if it´s false it eleminates it. */
        return blog.title.match(this.search);
      });
    }
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
