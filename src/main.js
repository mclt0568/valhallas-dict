import Vue from 'vue'
import CarbonComponentsVue from "@carbon/vue";
import 'carbon-components/css/carbon-components.css';
import VueI18n from 'vue-i18n'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(CarbonComponentsVue);
Vue.use(VueI18n);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
