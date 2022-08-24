<template>
  <!-- EXPLANATION: add a navbar for the user to navigate between pages -->
  <!-- 1) Add the typical structure of a navbar -->
  <nav>
    <ul>
      <!-- 2) Instead of add an anchor tag inside each <li> I have 
            to add the tag provided by the vue router called  <router-link>.
            Using this tag is better becuase it intercepts the click event
            so that the page doesn´t need to be reloaded, and therefore
            the navigation is faster  -->
      <!-- 3) the routing link tag has the attribute to, which we have to set
      equal to whatever url we want to go to. In this example the urls are: 
      "/"" and "/add"-->
      <!-- 10) Now, the problem is that both links have the active style
      even thoug on of them is not active. That happens because all urls
      include a slash. So, the active style will be applied to all the
      urls with a slach, .i.e all of them. To avoid this, I have to use the
      exact attribute in the router-link tag. That we´ll  apply the
      active style only to the active link. -->
      <li><router-link to="/" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add a new blog</router-link></li>
      <!-- 4) Now we have to import this component into the root
      component (App.vue) to display the navbar. The steps 5), 6), 
      7), 8) are in App.vue -->
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
/* 9) Use the  router-link-active provided by the vue router to style the
links when they´re active*/
.router-link-active {
  background: #eee;
  color: #444;
}
</style>
Footer
