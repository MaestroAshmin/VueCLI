<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
import { bus } from "../main";
export default {
  props: ["title"],
  data() {
    return {
      // title: "Vue Ninjas"
    };
  },
  methods: {
    changeTitle: function() {
      //this.$emit("changeTitle", "Vue Wizardry");
      this.title = "Vue bus";
      bus.$emit("titleChanged", "Vue Bus");
    }
  }
};
</script>
<style scoped>
header {
  background: lightblue;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>