<template>
  <div>
    <Header />
    <Ninjas />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";
export default {
  components: {
    Header,
    Footer,
    Ninjas
  },
  data() {}
};
</script>

<style>

</style>