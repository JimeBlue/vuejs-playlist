<template>
  <div id="single-blog">
    <!-- 6) Output the title and the body of the individual blog we
    requested fromt the database. Now I need to add a link to the
    blogs so that the user can access and individual blog.
    The next stepts are in the showBlogs component -->
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      /* 3)Create the id property to store the id comming from the database
        when we request the data. To store the id we use: this.$route.params + 
        the name of the parameter, in this case id. */
      id: this.$route.params.id,
      /* 4) Create the blog property to store each blog when we make a request
      to the database */
      blog: {}
    };
  },
  /* 5) Create request to the database an store an object with an specific
  representing a blog in the blog property. */
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function(data) {
        console.log(data);
        this.blog = data.body;
      });
  }
};
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
