import Vue from "vue";
import App from "./App.vue";
// Import plug-in to make http request
import VueResource from "vue-resource";

// Use vue-resource plug-in
Vue.use(VueResource);

new Vue({
  el: "#app",
  render: h => h(App)
});
