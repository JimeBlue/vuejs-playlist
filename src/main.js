/* EXPLANATION: set up routing */

/* 1) Install the 3rd party package to set up routings. Run this command in the terminal 
of your project:  npm install vue-router --save. The vue router package will be installed
in the dependencies in the package.json file*/

import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
/* 2) Import the vue router package */
import VueRouter from "vue-router";
/* 8)Import the file where I registered the routes */
import Routes from "./routes";

Vue.use(VueResource);
/* 3) Use the vue router package in my application */
Vue.use(VueRouter);

/* 4) To set up the routes we need to crate a new instance of 
the vue router that we´ve just created. In this new instance, we´re
passing an object which is going to take our routes, i.e we can 
register our routes in this object. BUT in oder to keep things organized,
I will registered the routes in a different file and the import that
file in here. That file is routes.js inside the src folder.
Stepts 5), 6), 7) are in routes.js*/
const router = new VueRouter({
  /* 9) Now register the routes we defined in routes.js. To do
  that, I create a property calles routes and set it to the
  routes.js file*/
  routes: Routes
});

new Vue({
  el: "#app",
  render: h => h(App),
  /* 10) Indicate that I want to use the router in this view instance,
  i.e in my app. So, I create the property router and set it to be equal
  to the const router I created above */
  router: router
  /* 11) Now we need to specify where we want the components to load in
  when we use the routes. I´ll do that in the root component, 
  i.e App.vue. The next steps are in that component */
});
