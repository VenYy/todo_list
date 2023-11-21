import "jquery/dist/jquery"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
new Vue({
    render: (h) => h(App),
}).$mount("#app");
