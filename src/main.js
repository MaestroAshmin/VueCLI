import Vue from "vue";
import App from "./App.vue";
// import Ninjas from "./Maestro.vue";
// Vue.component("ninjas", Ninjas);

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");
