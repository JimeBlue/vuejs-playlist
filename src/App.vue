<template>
  <div>
    <!-- 7) Output the header component  -->
    <!-- 8) If we inspect, we can see that anchor tags were added
    for each link. And if the link is active, the anchor tag
    gets a class of "router-link-active". We can use this
    class to style the links when they´re active. I´ll do that
    in the header component within the style tag-->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// Imports
import showBlogs from "./components/showBlogs.vue";
import listBlogs from "./components/listBlogs.vue";
/* 5) Import the header component */
import header from "./components/header.vue";
export default {
  components: {
    "show-blogs": showBlogs,
    "list-blogs": listBlogs,
    /* 6) Register the header component */
    "app-header": header
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
