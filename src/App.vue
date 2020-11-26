<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>ARUSIP</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-once
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col>
            <v-card>
              <v-subheader> Device-1</v-subheader>
              <v-list two-line>
                <arusip :chart-data="chartData1" :height="100"></arusip>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="8"
            sm="6"
            md="6"
          >

          </v-col>
          <v-col 
            cols="4"
            md="4"
          >
            <div id="app">
              <Map/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Vue from 'vue'
import {db} from './db';
import VueChart from 'vue-chart'
import arusip from './arusip'
import Map from './components/Map.vue'

Vue.use(VueChart);
export default {
  name: 'App',
  data() {
    return {
      cards: ['Today'],
      drawer: null,
      grafiks: [],
      chartData1: null,
      links: [
        ['mdi-crosshairs-gps', 'Lokasi 1'],
        ['mdi-crosshairs-gps', 'Lokasi 2'],
        ['mdi-crosshairs-gps', 'Lokasi 3'],
        ['mdi-crosshairs-gps', 'Lokasi 4'],
      ]
    }
  },
  firebase:{
    grafiks: db.ref('grafiks').limitToLast(30),
  }, 
  methods: {
    generateData() {
            let nilaiAX_1 = [];
            let nilaiAY_1 = [];
            let nilaiAZ_1 = [];
            let Vlat = [];
            let Vlng = [];
            this.grafiks.forEach(e => {
              if(e.dev_id=='arusip_lora1'){
            nilaiAX_1.push(e.payload_fields.ax)
            nilaiAY_1.push(e.payload_fields.ay)
            nilaiAZ_1.push(e.payload_fields.az)
            Vlat.push(e.metadata.latitude)
            Vlng.push(e.metadata.longitude)
              } 
            })
      this.chartData1 = {
        labels: ["-29", "-28", "-27","-26", "-25", "-24", "-23","-22", "-21", "-20", "-19","-18", "-17", "-16", "-15","-14", "-13", "-12", "-11","-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0"],
        datasets: [
          {
            label: "AX",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "black",
            data: nilaiAX_1
          },
          {
            label: "AY",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            borderWidth: 1,
            data: nilaiAY_1
          },
          {
            label: "AZ",
            borderColor: "#41B883",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            borderWidth: 1,
            data: nilaiAZ_1
          }
        ]
      }
    }
  },
    components : { 
      arusip,
      Map 
      },
      mounted() {
    setInterval(this.generateData,1000);
  }
}
</script>
