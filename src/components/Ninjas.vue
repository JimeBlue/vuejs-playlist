<template>
  <div id="ninjas">
    <ul>
      <li
        v-for="ninja in ninjas"
        :key="ninja.id"
        v-on:click="ninja.show = !ninja.show"
      >
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: [
        { id: 1, name: "Ryu", speciality: "Vue Components", show: false },
        { id: 2, name: "Crystal", speciality: "HTML Wizardry", show: false },
        { id: 3, name: "Hitoshi", speciality: "Click Events", show: false },
        { id: 4, name: "Tango", speciality: "Conditionals", show: false },
        { id: 5, name: "Kami", speciality: "Webpack", show: false },
        { id: 6, name: "Yoshi", speciality: "Data Diggin", show: false }
      ]
    };
  },
 
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