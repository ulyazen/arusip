import Vue from 'vue';
import { rtdbPlugin } from 'vuefire'
import App from './App.vue';
import vuetify from './plugins/vuetify';
// import * as VueGoogleMaps from 'vue2-google-maps'

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBCFNaKZ73uiidUpfTsbnY4MuoM5-I_llk',
//   },
// }); 
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.use(rtdbPlugin)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
});