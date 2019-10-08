<template>
  <div>
    <h1>List of ninjas</h1>
    <ul>
      <li v-for="(ninja,index) in ninjas" v-bind:key="ninja">{{ ninja }}- {{index}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data: function() {
    return {
      ninjas: ["Yoshi", "Ganpachiro", "Ryu"]
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
h1 {
  color: green;
}
</style>
