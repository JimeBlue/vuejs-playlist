<template>
  <div id="ninjas">
    <ul>
      <!-- 1) In <li> with v-for loop through the ninjas array -->
      <!-- 2) In <li> bind the key attribute the each ninja id, to prevent the error
              "Elements in iteration expect to have 'v-bind:key' directives"-->
      <!-- 3) In <li> add an on click event and set it to reverse the show proterty -->
      <li
        v-for="ninja in ninjas"
        :key="ninja.id"
        v-on:click="ninja.show = !ninja.show"
      >
        <!-- 4) Display each ninja name -->
        <h2>{{ ninja.name }}</h2>
        <!-- 5) Output each ninja speciality and add the directive v-show to show 
        each ninja speciality  only when v-show is true-->
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* EXPLANATION: in my array ninjas, each object has the property "speciality" which will
      be used to show or hide each ninja speciality */
      ninjas: [
        { id: 1, name: "Ryu", speciality: "Vue Components", show: false },
        { id: 2, name: "Crystal", speciality: "HTML Wizardry", show: false },
        { id: 3, name: "Hitoshi", speciality: "Click Events", show: false },
        { id: 4, name: "Tango", speciality: "Conditionals", show: false },
        { id: 5, name: "Kami", speciality: "Webpack", show: false },
        { id: 6, name: "Yoshi", speciality: "Data Diggin", show: false }
      ]
    };
  }
};
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>