<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <!-- 7) To allow the user to click in a blog and go to it,
      wrap the <h2> containing the title with a  <router-link>
      tag. Inside the <router-link> add the attribute "to" in
      order to indicate where the link shoulg go. The value
      of that attribure must be the individual id of this
      blog. So,  I need data binding to set the "to" attribute
      to the object blog + the attribute id, which is store in
      my data in this component. The result is: v-bind:to="'/blog/' + blog.id.
      It´s important to remember that I requested the data from
      the database in this component and that with that data came an id. -->
      <!-- 8) The end! Now, the title of each blog is a link 😇  -->
      <router-link v-bind:to="'/blog/' + blog.id"
        ><h2>{{ blog.title }}</h2></router-link
      >
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
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
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
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
