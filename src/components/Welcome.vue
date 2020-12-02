<template>
  <v-container>
    <v-col cols="12">
      <v-card class="mx-auto">
        <v-layout text-xs-center wrap>
          <v-flex xs12>
            <v-img
              :src="require('../assets/logo.svg')"
              class="my-3"
              contain
              height="200"
            ></v-img>
          </v-flex>
          <v-layout justify-center>
            <v-card-text class="subheading font-weight-regular">
              <h1 class="display-2 font-weight-medium mb-3">
                Selamat Datang pada PantauLongsor.id
              </h1>
              Universitas Ahmad Dahlan
              <br />Alamat: Jl. Kapas No.9, Semaki, Kec. Umbulharjo , Kota
              Yogyakarta, Daerah Istimewa Yogyakarta 55166
            </v-card-text>
          </v-layout>
        </v-layout>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto">
        <v-subheader>Semua Lokasi</v-subheader>
          <MapFront class="mx-auto" 
          :latitude1="lati1[0]" :longitude1="longi1[0]" 
          :latitude2="-7.29072670" :longitude2="108.81199000" 
          :latitude3="lati3[0]" :longitude3="longi3[0]" 
          />
         
      </v-card> 
    </v-col>
  </v-container>
</template>

<script>
import MapFront from "@/components/MapFront.vue";
// import Vue from "vue";
import { db } from "@/db";
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
      lati1: null,
      longi1: null,
      lati2: null,
      longi2: null,
      lati3: null,
      longi3: null,
      grafiks: [],
    };
  },
  firebase: {
    grafiks: db.ref("grafiks").limitToLast(dataTampil),
  },
  methods: {
    generateData() {
      let Vlat1 = [];
      let Vlng1 = [];

      let Vlat2 = [];
      let Vlng2 = [];

      let Vlat3 = [];
      let Vlng3 = [];

      //arusip1
      this.grafiks.every((e) => {
        if (e.dev_id == "arusip_lora1") {      
          Vlat1.push(e.metadata.latitude);
          Vlng1.push(e.metadata.longitude);
          if (Vlat1.length === batas) {
            return false;
          }
        }
        return true;
      });
      this.lati1 = Vlat1;
      this.longi1 = Vlng1;

      //arusip2
      this.grafiks.every((e) => {
        if (e.dev_id == "arusip_lora2") {      
          Vlat2.push(e.metadata.latitude);
          Vlng2.push(e.metadata.longitude);
          if (Vlat2.length === batas) {
            return false;
          }
        }
        return true;
      });
      this.lati2 = Vlat2;
      this.longi2 = Vlng2;

      //arusip3
      this.grafiks.every((e) => {
        if (e.dev_id == "arusip_lora3") {      
          Vlat3.push(e.metadata.latitude);
          Vlng3.push(e.metadata.longitude);
          if (Vlat3.length === batas) {
            return false;
          }
        }
        return true;
      });
      this.lati3 = Vlat3;
      this.longi3 = Vlng3;
      
    },
    
  },
  
  components: { MapFront },
  mounted() {
    setInterval(this.generateData, 2000);
  },
}
</script>