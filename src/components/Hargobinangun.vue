<template>
  <v-row style="margin-top: -64px">
    <v-spacer></v-spacer>
    <v-col cols="12">
      <v-card class="mx-auto">
        <v-card-subtitle>Device-Hargobinangun</v-card-subtitle>
        <arusip
          :chart-data="chartData"
          :options="options"
          :height="150"
        ></arusip>
        <v-card-text>
          <v-divider class="my-2"></v-divider>
          <v-chip-group active-class="primary accent-4 white--text" column>
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
    <v-col cols="12" sm="6" md="8">
      <v-card class="mx-auto">
        <v-subheader>Description</v-subheader>
        <v-card-text>
          <p class="text-justify">
            Hargobinangun adalah desa di kecamatan Pakem, Sleman, Daerah
            Istimewa Yogyakarta, Indonesia.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-col>
        <v-card class="mx-auto">
          <v-subheader>Photo</v-subheader>
          <v-img height="150" :src="require('../assets/hargobinangun.jpg')">
          </v-img>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto">
          <v-subheader>Maps</v-subheader>
          <Map class="mx-auto" :latitude="lati[0]" :longitude="longi[0]" />
        </v-card>
      </v-col>
    </v-col>
    <v-col cols="12" sm="6" md="2">
      <v-card color="error" class="mx-auto">
        <v-subheader class="white--text">Pergerakan x</v-subheader>
        <v-card-text class="white">
          <v-icon>mdi-axis-arrow</v-icon>
          {{ axNow[now] }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="2">
      <v-card color="primary" class="mx-auto">
        <v-subheader class="white--text">Pergerakan y</v-subheader>
        <v-card-text class="white">
          <v-icon>mdi-axis-arrow</v-icon>
          {{ ayNow[now] }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="2">
      <v-card color="success" class="mx-auto">
        <v-subheader class="white--text">Pergerakan z</v-subheader>
        <v-card-text class="white">
          <v-icon>mdi-axis-arrow</v-icon>
          {{ azNow[now] }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-card color="orange" class="mx-auto">
        <v-subheader class="white--text">Orientasi</v-subheader>
        <v-card-text class="white">
          <v-icon>mdi-compass-rose</v-icon>
          {{ axNow[now] }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-card color="blue lighten-4" class="mx-auto">
        <v-subheader class="white--text">Curah Hujan</v-subheader>
        <v-card-text class="white">
          <v-icon>mdi-weather-rainy</v-icon>
          {{ axNow[now] }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from "vue";
import { db } from "@/db";
import VueChart from "vue-chart";
import arusip from "@/arusip";
import moment from "moment";
import Map from "@/components/Map.vue";
Vue.use(VueChart);
const data = 20;
const dataTampil = data * 3;
const batas = dataTampil / 3;
export default {
  name: "App",
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      lati: null,
      longi: null,
      axNow: null,
      ayNow: null,
      azNow: null,
      grafiks: [],
      chartData: null,
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
        if (e.dev_id == "arusip_lora2") {
          nilaiAX_1.push(e.payload_fields.ax);
          nilaiAY_1.push(e.payload_fields.ay);
          nilaiAZ_1.push(e.payload_fields.az);
          tanggal_1.push(e.metadata.time);
          Vlat.push(e.metadata.latitude);
          Vlng.push(e.metadata.longitude);
          if (tanggal_1.length === batas) {
            return false;
          }
        }
        return true;
      });
      for (let i = 0; i < tanggal_1.length; i++) {
        let date = moment(tanggal_1[i]).format("HH:mm:ss");
        tanggal_baru_1.push(date);
      }
      this.lati = Vlat;
      this.longi = Vlng;
      this.axNow = nilaiAX_1;
      this.ayNow = nilaiAY_1;
      this.azNow = nilaiAZ_1;
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
      };
    },
  },
  computed: {
    now: function () {
      return batas - 1;
    },
  },
  components: { arusip, Map },
  mounted() {
    setInterval(this.generateData, 2000);
  },
};
</script>