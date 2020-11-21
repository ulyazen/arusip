import Vue from 'vue';
import { rtdbPlugin } from 'vuefire'
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.use(rtdbPlugin)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
});