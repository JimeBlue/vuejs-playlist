<template>
  <!-- EXPLANATION: I want to get data from the databse and output it. -->
  <!-- 1) I create the showBlogs component to show the data. (in the addBlog component,
  I send the data to the database) -->
  <!-- 2)Import and register the showBlogs component in App.vue, because we want to nest it
   inside App. -->
  <!-- 3)Nest showBlogs in App.js (and for now comment out <add-blog></add-blog>) -->

  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <!-- 10) Now, I want to dynamically output the data I have retrieved from the database.
    So, in a div, I use the v-for directive to loop througn the blogs arrays and output
    the the blog.title and the blog.body -->
    <!-- IMPORTANT: don´t pay attention to errors in <li>, it´s just because there is no key binding -->
    <div v-for="blog in blogs" class="single-blog">
      <h2>{{ blog.title }}</h2>
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
  /* 4) Inside the created lifecycle hook, I need to make the http get request,
  to get the data, and store it in some kind of variable  */

  created() {
    /* 5) Make the get request with: this.$http.get. After that, add in the parenthesis, where
   I´m getting the data from. (Again I´m using the json placeholder resource) */
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      /* 6) Add the then method, which is going to fire and get the data,
      once the get promise is completed (.then(function(data)).*/
      .then(function(data) {
        /* 7) I want to see which data is retrived in the function, therefore I console
        log it. When I go to the console, I can see that the response has a body, which
        is an array containing 100 objects inside it.*/
        console.log(data);
        /* 8) I don´t want to have all 100 objects, I just want 10. So to get those objects,
        access the body property in data and slice it to get the items from the 0 position
        to the 10 position (data.body.slice(0, 10)).*/
        /* 9) Now, I want to store my 10 objects in the property blogs inside my component data. 
        So, first I go to  my component data, I create the property blogs and set it to 
        an empty array. Then set blog to my 10 objects: this.blogs = data.body.slice(0, 10);*/
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
