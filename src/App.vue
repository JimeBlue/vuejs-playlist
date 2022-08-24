<template>
  <div>
    <!-- 12) Using the tag , I specify where I want
    the components that I specified in my routes to be loaded in. 
    So, I use that tag and I delete the components I had nested
    inside the div. Now is the router which is going to 
    indicate which component will be nested here-->
    <router-view></router-view>
    <!-- 13) The end! If I want to check the routes work, 
    use /add in the url and it should go to the add page -->
  </div>
</template>

<script>
// Imports
import showBlogs from "./components/showBlogs.vue";
import listBlogs from "./components/listBlogs.vue";
export default {
  components: {
    "show-blogs": showBlogs,
    "list-blogs": listBlogs
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
