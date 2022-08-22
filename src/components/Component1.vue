<template>
  <div class="component1">
    <h1>You have clicked {{ labeltext }} times</h1>
  </div>
</template>

<script>
// Import the event bus inside event-bus.js
import EventBus from "../event-bus";

export default {
  name: "Component1",
  data() {
    return {
      labeltext: 0
    };
  },
  methods: {
    change_n(n) {
      this.labeltext = n;
    }
  },
  created() {
    /* 
    Listen to the custom event and its data sent from component2
    (  bus.$on("change_n",) and associate it to the change_n
    method in this component (this.change_n))
     */
    EventBus.$on("change_n", this.change_n);
  },
  destroyed() {
    // Removes Event Bus listener upon removal
    // of template from DOM.
    EventBus.$off("change_n", this.change_n);
  }
};
</script>

<style scoped>
.component1 {
  display: block;
  background-color: green;
  height: 15em;
  text-align: center;
  color: white;
  padding-top: 5em;
}
</style>