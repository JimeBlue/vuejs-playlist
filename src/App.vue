<template>
  <!-- Slots are used to create templates that we can pass inside a component.
     In this example, I create the formHelper component, which I want to use
     to create a form inside my website.-->
  <div>
    <!-- 1)I use the component form-helper with open and closing tag -->
    <!-- 2)Inside the componet use, I create my desired template by means of the 
           slot attribute with a name. For example: slot="form-header"  -->
    <!-- 3) In the componet form-helper.vue, I use the slots to display the
            template using the following structure  <slot name="form-header"></slot>-->
    <!-- IMPORTANT: if I want some data to be dynamic, I need to have that
            data in this component and not in the form-helper component -->
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of a form</h3>
        <p>This is some info about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
// Imports
import formHelper from "./components/formHelper.vue";
export default {
  components: {
    "form-helper": formHelper
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit: function() {
      alert("thanks for submitting");
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>