<template>
  <div class="component2">
    <button @click="count">Click</button>
  </div>
</template>

<script>
// Import the event bus inside event-bus.js
import EventBus from "../event-bus";

export default {
  name: "Component2",
  data() {
    return {
      nclick: 0
    };
  },
  methods: {
    count() {
      this.nclick += 1;
      /* Emitting a custom-event via the Event Bus, using bus.$emit. 
         The "change_n" is the custom event I´m emitting and 
         "this.nclick" is the data I´m emitting within the custom event
      */
      EventBus.$emit("change_n", this.nclick);
    }
  }
};
</script>

<style scoped>
.component2 {
  display: block;
  background-color: grey;
  height: 15em;
  text-align: center;
  padding-top: 5em;
}
</style>