/* Register the routes in this file */

/* 7) In need to import the components I´m including
in my routes */
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";

/* 5) Export an array of object, each object in this array is 
going to represent a different route */
export default [
  /* 6) Each object contains the path, and the component we want 
    to show in that path. Here we have 2 routes. In the home path,
    I want to show the showBlogs component and in the path "/add".
    I want to show the addBlog component.
    */
  { path: "/", component: showBlogs },
  { path: "/add", component: addBlog }
];
