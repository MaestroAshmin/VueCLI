<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ninjas></ninjas>
    <app-header></app-header>
    <app-ninja></app-ninja>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Ninjas from "./Maestro.vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Ninja from "./components/ninjas.vue";

export default {
  name: "app",
  data: function() {
    return {
      title: "Ninja App"
    };
  },
  components: {
    ninjas: Ninjas,
    "app-header": Header,
    "app-footer": Footer,
    "app-ninja": Ninja
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: purple;
}
</style>
