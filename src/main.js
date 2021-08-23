import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VueSweetalert2);
Vue.use(Buefy);

// Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
