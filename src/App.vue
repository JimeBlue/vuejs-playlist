<template>
  <!-- EXPLANATION: dynamic components are used to show one component or the other
  in a particular place in our template. -->
  <div>
    <keep-alive>
      <!-- Problem: 
      if user clicks "show form one" output the component formOne
      if user clicks "show form two" output the component formTwo
      -->
      <!-- 1)Use the component tag. This tag realises that we want to output a component inside
             and asks which component we want to output. To thell the tag which component we want
             to output, we use the attribue is + the name of the component we want to output: (is="") -->
      <!-- 2)If I say  is="formOne", the component with the name formOne will be ouptued. But in 
             this case, it´s what we want, we want to dynamically output one component or the other-->
      <!-- 3)In order to dynamically output one component or the other, we add data binding to the
      "is" attribute. Now, "is" is going to be equal to some kind of property we store in data, which
      is going to keep track of whether we want to show formOne or formTwo. So, we set "is"
      to be equyl to component: (v-bind:is="component") -->
      <!-- 4)Set the property  component in our data ojbect to be form-one (component: "form-one").
      This will make form-one to appear by default when the app is shown.-->
      <component v-bind:is="component"></component>
    </keep-alive>
    <!-- 5)Now, can dynamically change the value of the property component, which in turn
      will change which form will be outputed to the browser. To do that, we create 2 buttons
      with a click event, which will be equal to the component property. 
      When the button "Show form one" is clicked, the component property is set to 'form-one'. 
      When the button "Show form two" is clicked, the component property is set to 'form-Two'. -->
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
  </div>
  <!-- EXPLANATION: problem: if I add something in the input fields of form one, when I go
  to form two and I come back to form one, that data is lost. In order to prevent that and 
  preserve the data, we have to wrap the component tag with the keep-alive tag. -->
</template>

<script>
// Imports
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";
export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo
  },
  data() {
    return {
      component: "form-one"
    };
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