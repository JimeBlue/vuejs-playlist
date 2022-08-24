import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  /* EXPLANATION: there are 2 types of routing modes, hash and history.
   With hash, after the foward slash we get a hash (#). By deafult,
   Vue used the hash mode. If we want to change it, ´cause it really
   looks wired to have a # in the url, we need to to add mode:history,
   like I did below. This can also be done directly on the server and
   there is a great explanation of what all of this happens in the net
   ninja Vue2 tutorial video #40
   (https://www.youtube.com/watch?v=js5Sr_ZSHDs&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=41)*/
  mode: "history"
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
