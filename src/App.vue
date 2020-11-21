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
              <v-subheader> Device-1 AX </v-subheader>

              <v-list two-line>
                <arusip :chart-data="chartData" :height="100"></arusip>
              </v-list>
            </v-card>
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
Vue.use(VueChart);
export default {
  name: 'App',
  data() {
    return {
      cards: ['Today'],
      drawer: null,
      grafiks: [],
      chartData: null,
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
            let nilai = [];
            this.grafiks.forEach(e => {
            nilai.push(e.payload_fields.ax)
            })
      this.chartData = {
        labels: ["-29", "-28", "-27","-26", "-25", "-24", "-23","-22", "-21", "-20", "-19","-18", "-17", "-16", "-15","-14", "-13", "-12", "-11","-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0"],
        datasets: [
          {
            label: "AX",
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
            data: nilai
          }
        ]
      }
    }
  },
    components : { arusip },
      mounted() {
    setInterval(this.generateData);
  }
}
</script>
