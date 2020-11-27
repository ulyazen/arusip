<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
        <div>ARUSIP</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-list-item-group nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-once v-for="[icon, text] in links" :key="icon" link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-main class="grey lighten-4">
      <v-container class="py-0 px-0" fluid>
        <v-card flat>
          <v-toolbar color="primary" dark extended tile>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </v-toolbar>
          <v-container class="grey lighten-4" fluid>
            <v-row style="margin-top: -64px">
              <v-spacer></v-spacer>
              <v-col cols="12">
                <v-card class="mx-auto">
                  <v-card-subtitle>Device-1</v-card-subtitle>
                  <arusip
                    :chart-data="chartData"
                    :options="options"
                    :height="150"
                  ></arusip>
                  <v-card-text>
                    <v-divider class="my-2"></v-divider>
                    <v-chip-group
                      v-model="selection1"
                      active-class="deep-purple accent-4 white--text"
                      column
                    >
                      <v-chip>Live</v-chip>
                      <v-chip>3 Jam</v-chip>
                      <v-chip>6 Jam</v-chip>
                      <v-chip>1 Hari</v-chip>
                      <v-chip>1 Minggu</v-chip>
                      <v-chip>1 Bulan</v-chip>
                      <v-chip>3 Bulan</v-chip>
                      <v-chip>1 Tahun</v-chip>
                    </v-chip-group>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-card class="mx-auto">
              <v-subheader>Maps</v-subheader>
              <Map class="mx-auto"
                :latitude="chartData.lat[0]"
                :longitude="chartData.lng[0]"
              />
            </v-card>
          </v-container>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import { db } from "./db";
import VueChart from "vue-chart";
import arusip from "./arusip";
import moment from "moment";
import Map from './components/Map.vue'
Vue.use(VueChart);
const dataTampil = 20;
export default {
  name: "App",
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      drawer: null,
      grafiks: [],
      chartData: null,
      links: [
        ["mdi-crosshairs-gps", "Sidomulyo"],
        ["mdi-crosshairs-gps", "Hargobinangun"],
        ["mdi-crosshairs-gps", "Imogiri"],
        ["mdi-crosshairs-gps", "Giripasang"],
      ],
    };
  },
  firebase: {
    grafiks: db.ref("grafiks").limitToLast(dataTampil),
  },
  methods: {
    generateData() {
      let nilaiAX_1 = [];
      let nilaiAY_1 = [];
      let nilaiAZ_1 = [];
      let tanggal_1 = [];
      let tanggal_baru_1 = [];
      let Vlat = [];
      let Vlng = [];
      this.grafiks.every((e) => {
        if (e.dev_id == "arusip_lora1") {
          nilaiAX_1.push(e.payload_fields.ax);
          nilaiAY_1.push(e.payload_fields.ay);
          nilaiAZ_1.push(e.payload_fields.az);
          tanggal_1.push(e.metadata.time);
          Vlat.push(e.metadata.latitude)
          Vlng.push(e.metadata.longitude)
                      if( tanggal_1===dataTampil){
                       if( Vlat.length===1 &&  Vlng.length===1){
              return false;
            }
              return false;
            }
        }

        return true;
      });
      for (let i = 0; i < tanggal_1.length; i++) {
        let date = moment(tanggal_1[i]).format("HH:mm:ss");
        tanggal_baru_1.push(date);
      }
      this.chartData = {
        labels: tanggal_baru_1,
        datasets: [
          {
            label: "AX",
            borderColor: "#FC2525",
            backgroundColor: "transparent",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "black",
            data: nilaiAX_1,
            time: tanggal_1,
          },
          {
            label: "AY",
            borderColor: "#05CBE1",
            backgroundColor: "transparent",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            borderWidth: 1,
            data: nilaiAY_1,
          },
          {
            label: "AZ",
            borderColor: "#41B883",
            backgroundColor: "transparent",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            borderWidth: 1,
            data: nilaiAZ_1,
          },
        ],
        lat : Vlat,
        lng : Vlng
      };
    },
  },
  components: { arusip, Map },
  mounted() {
    setInterval(this.generateData, 2000);
  },
};
</script>
