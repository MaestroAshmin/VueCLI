<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ninjas></ninjas>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
    <app-footer v-bind:title="title"></app-footer>
    <form-helper>
      <!-- <h2 slot="slotTitle">{{ slotTitle }}</h2>
      <p slot="slotText">I am the paragraph for the slot</p>-->
      <div slot="form-header">
        <h3>Title of form</h3>
        <p>Informations</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" name="password" placeholder="password" />
      </div>
      <div slot="form-controls">
        <button type="submit" v:on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component='form-one'">Show form one</button>
    <button v-on:click="component='form-two'">Show form two</button>
  </div>
</template>
S
<script>
import HelloWorld from "./components/HelloWorld.vue";
import Ninjas from "./Maestro.vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Ninja from "./components/ninjas.vue";
import formHelper from "./components/formHelper.vue";
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";

export default {
  name: "app",
  data: function() {
    return {
      // title: "Ninja App",
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Ganpachiro", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ],
      title: "Vue ninjas",
      slotTitle: "I am a dynamic slot Title",
      component: "form-two"
    };
  },
  components: {
    ninjas: Ninjas,
    "app-header": Header,
    "app-footer": Footer,
    "app-ninja": Ninja,
    "form-helper": formHelper,
    "form-one": formOne,
    "form-two": formTwo
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
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
