<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
        <div>PantauLongsor.id</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-list-item-group nav dense>
        <v-list-item-group active-class="primary--text text--accent-4">
          <v-list-item v-once v-for="[icon, text] in links" :key="icon" link>
            <v-list-item-icon>
              <v-icon color="primary">{{ icon }}</v-icon>
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
                      active-class="primary accent-4 white--text"
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
              <v-col cols="12" sm="6" md="8">
                <v-card class="mx-auto">
                  <v-subheader>Description</v-subheader>
                  <v-card-text>
                    <p class="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed laoreet et odio a laoreet. Maecenas at euismod nunc,
                      volutpat cursus metus. Donec sed ipsum vestibulum,
                      venenatis diam eu, venenatis risus. Vivamus semper ex a
                      purus volutpat congue. Etiam fermentum, dui id blandit
                      tempus, tellus lacus pellentesque ligula, at semper nisi
                      purus sit amet tellus. Nam facilisis mauris et libero
                      posuere porttitor. Nam massa mi, auctor at augue
                      vestibulum, varius feugiat felis. Nullam at elit
                      porttitor, dapibus metus eu, bibendum tortor. Maecenas
                      porta vulputate dolor eu vestibulum. Nunc accumsan, enim a
                      mattis fermentum, nibh lacus ultrices nunc, vel facilisis
                      sem leo sit amet sapien. Etiam ornare neque felis, quis
                      interdum nisi dapibus a. Nam eu ante facilisis, tincidunt
                      ligula in, consequat risus. Maecenas in sollicitudin
                      neque, finibus maximus arcu. Integer eleifend, lorem vitae
                      sollicitudin lobortis, felis dui iaculis metus, eu sodales
                      leo diam in sapien. Donec dignissim interdum fringilla.
                      Sed sit amet dictum sem. Nullam ut dolor eget justo tempus
                      ornare eget porta massa. In quis gravida metus. Donec
                      vestibulum suscipit lacus, non ultrices tellus
                      pellentesque ac. Nulla condimentum, ex id posuere rhoncus,
                      massa nulla tempus metus, id lacinia neque lectus non sem.
                      Praesent scelerisque odio massa, ac eleifend tortor
                      gravida sed. Maecenas eget diam eu metus ultricies
                      gravida. Ut aliquam convallis vestibulum. Nullam vel
                      sapien malesuada, eleifend arcu eu, posuere eros. Cras
                      convallis et mauris id gravida. In at elementum est. Nam
                      vel tellus vestibulum, gravida nibh a, porta dolor. Nam
                      faucibus eget risus nec mattis.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-col>
                  <v-card class="mx-auto">
                    <v-subheader>Photo</v-subheader>
                    <v-img
                      height="150"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    </v-img> </v-card
                ></v-col>
                <v-col>
                  <v-card class="mx-auto">
                    <v-subheader>Maps</v-subheader>
                    <Map
                      class="mx-auto"
                      :latitude="chartData.lat[0]"
                      :longitude="chartData.lng[0]"
                    />
                  </v-card>
                </v-col>
              </v-col>
              <v-col cols="12" sm="6" md="2">
                <v-card class="mx-auto">
                  <v-subheader>Pergerakan x</v-subheader>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="2">
                <v-card class="mx-auto">
                  <v-subheader>Pergerakan y</v-subheader>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="2">
                <v-card class="mx-auto">
                  <v-subheader>Pergerakan z</v-subheader>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card class="mx-auto">
                  <v-subheader>Orientasi</v-subheader>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card class="mx-auto">
                  <v-subheader>Curah Hujan</v-subheader>
                </v-card>
              </v-col>
            </v-row>
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
import Map from "./components/Map.vue";
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
        ["mdi-map-marker", "Sidomulyo"],
        ["mdi-map-marker", "Hargobinangun"],
        ["mdi-map-marker", "Imogiri"],
        ["mdi-map-marker", "Giripasang"],
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
          Vlat.push(e.metadata.latitude);
          Vlng.push(e.metadata.longitude);
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
        lat: Vlat,
        lng: Vlng,
      };
    },
  },
  components: { arusip, Map },
  mounted() {
    setInterval(this.generateData, 2000);
  },
};
</script>
