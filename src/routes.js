import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
// 2)Import the singleBlog component used in the route with parameter.
// Next step in singleBlog
import singleBlog from "./components/singleBlog.vue";

/* EXPLANATION: add a link to each block so that the user can go
to it. To do that I need to assign each blog a route parameter. */
export default [
  { path: "/", component: showBlogs },
  { path: "/add", component: addBlog },
  /* 1)Add a route parameter to each blog. To do that, I add a new route,
  which will be used to each individual blog. In the path, I need to
  add a parameter name, in this case it´s "id". Then, I sent the component
  to a singleBlog, a componente that I´m going to create*/
  { path: "/blog/:id", component: singleBlog }
];
