<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
<ul id="example-1">
  <li v-for="grafik in grafiks" :key="grafik.key">
    {{ grafik.payload_fields.ax }}
     {{ grafik.dev_id }}
  </li>
</ul>
  </div>
</template>

<script>
import Vue from 'vue'
import {db} from './db';
import VueChart from 'vue-chart'
Vue.use(VueChart);
export default {
  name: 'App',
  data() {
    return {
      grafiks: [],
    }
  },
  firebase:{
    grafiks: db.ref('grafiks').limitToLast(30),
    payload: db.ref('grafiks'),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
