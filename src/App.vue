<template>
  <!-- IMPORTANT: This explanation was not taken from the net ninja tutorial.
  That´s why this branch is not merged. Source of the example:
  https://www.geeksforgeeks.org/pass-data-between-components-using-vue-js-event-bus/#:~:text=An%20Event%20Bus%20is%20nothing,events%20and%20pass%20on%20data.
  The explanation on the net ninja tutorial is also useful  -->
  <div>
    <Component1></Component1>
    <Component2></Component2>
  </div>
</template>

<script>
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

/* EXPLANATION: An Event Bus is nothing but a global Vue instance that is imported
 by the components involved in communication and passing data */
// 1) In src, create a file, in this example "event-bus.js".
// Inside "event-bus.js", create the event bus, give it a name and export it.
// 2) Import the bus event in the components that will share data
// 3) Emit a custom-event containing the logic via the event bus. In this example, in component2
// 4) Insise the lifecycle hook "created()", listen to the custom event and its data. In this example, in component1.
// 5) In the listening component (component1), associate the custome event to a method or part
//    of the component where the data will be used.
// 6) Inside the lifecycle hook "destroyed()", remove the event bus listener

export default {
  name: "App",
  components: {
    Component1,
    Component2
  }
};
</script>