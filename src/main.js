import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.min.css";
import moment from "moment";
import "@animxyz/core";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
Vue.prototype.moment = moment;

new Vue({
    created() {
        AOS.init({ disable: "phone" });
    },
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");