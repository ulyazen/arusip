import Vue from 'vue';
import { rtdbPlugin } from 'vuefire'
import App from './App.vue';

Vue.use(rtdbPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
});