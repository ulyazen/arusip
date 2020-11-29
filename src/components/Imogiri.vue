<template>
  <v-row style="margin-top: -64px">
    <v-spacer></v-spacer>
    <v-col cols="12">
      <v-card class="mx-auto">
        <v-card-subtitle>Device-Imogiri</v-card-subtitle>
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
          <p class="text">
            Wilayah Administrasi Kecamatan Imogiri berada di sebelah Tenggra
            Ibukota Kabupaten Bantul, dengan luas wilayah 5.448,6880 ha dan
            memiliki wilayah administrasi yang mencakup 8 desa : Desa
            Selopamioro, Desa Sriharjo, Desa Kebonagung, Desa Imogiri, Desa
            Karangtalun, Desa Karangtengah, Desa Wukirsari, Desa Girirejo.
            Alamat kantor kecamatan : Jl. Imogiri Bantul Telp. (0274) 6460652
            Kondisi Geografis Wilayah Kecamatan Imogiri berbatasan dengan :
            Utara : Kecamatan Jetis dan Pleret; Timur : Kecamatan Dlingo;
            Selatan : Kecamatan Pundong dan Panggang, Kabupaten Gunung Kidul
            Barat : Kecamatan Jetis. Kecamatan Imogiri berada di dataran rendah.
            Ibukota Kecamatannya berada pada ketinggian 100 meter diatas
            permukaan laut. Jarak Ibukota Kecamatan ke Pusat Pemerintahan
            (Ibukota) Kabupaten Bantul adalah 8 Km. Bentangan wilayah di
            Kecamatan Imogiri 30% berupa daerah yang datar sampai berombak, 70%
            berombak sampai berbukit dan 0% berbukit sampai bergunung. K l i m a
            t o l o g i Kecamatan Imogiri beriklim seperti layaknya daerah
            dataran rendah di daerah tropis dengan dengan cuaca panas sebagai
            ciri khasnya. Suhu tertinggi yang tercatat di Kecamatan Imogiri
            adalah 26ºC dengan suhu terendah 23ºC. P e n d u d u k Kecamatan
            Imogiri dihuni oleh 13.119 KK. Jumlah keseluruhan penduduk Kecamatan
            Imogiri adalah 63.446 orang dengan jumlah penduduk laki-laki 31.549
            orang dan penduduk perempuan 31.987 orang. Tingkat kepadatan
            penduduk di Kecamatan Imogiri adalah 1.934 . jiwa/Km2. Sebagian
            besar penduduk Kecamatan Imogiri adalah petani. Dari data monografi
            Kecamatan tercatat 13.431 orang atau 23,83% penduduk Kecamatan
            Imogiri bekerja di sektor pertanian. S e n t r a I n d u s t r i
            Pucung Wukirsari - Sentra kerajinan tatah sungging. Giriloyo
            Wukirsari - Sentra kerajinan batik. Banyusumurup - Sentra kerajinan
            keris. Imogiri - sentra pembuatan makanan keripik tempe. W i s a t a
            B u d a y a Desa Selopamioro memiliki berbagai kegiatan sosial dan
            seni budaya. Salah satu kegiatan budaya adalah Upacara merti dusun
            atau bersih dusun. Upacara ini dilaksanakan di pelataran Goa Cerme
            yang berada di dusun Srunggo I dan Srunggo II. Upacara bersih dusun
            atau sedekah bumi atau merti dusun pada umumnya panen raya. Hal ini
            dimaksudkan untuk mengucapkan puji syukur kepada Tuhan yang Maha
            Esa. Upacara rasulan ini dilaksanakan sesudah bulan purnama, sedang
            harinya berubah-ubah. Pada prinsipnya dalam melaksanakan upacara itu
            mereka mengambil hari legi atau wage menurut kalender jawa. Adapun
            tempat upacara adalah di masjid Giriloyo, Imogiri. Merupakan tradisi
            dalam rangka mengganti air yang terdapat dalam 'kong' di makam
            Raja-raja Imogiri. Selanjutnya air kurasan yang diperoleh dari
            'kong' ini dibagi-bagikan kepada masyarakat yang memiliki
            kepercayaan bahwa air tersebut dapat memberikan kebaikan bagi
            kehidupan. Dilaksanakan pada hari Selasa Kliwon pada bulan Suro.
            Upacara Merti Dusun / Jodhangan di Gua Cerme Upacara Rasulan /
            Bersih Desa Wukirsari Upacara Kirab Budaya dan Upacara Nguras Kong
            (Enceh)
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-col>
        <v-card class="mx-auto">
          <v-subheader>Photo</v-subheader>
          <v-img height="150" :src="require('../assets/imogiri.jpg')"> </v-img>
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
          {{ axNow }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="2">
      <v-card color="primary" class="mx-auto">
        <v-subheader class="white--text">Pergerakan y</v-subheader>
        <v-card-text class="white">
          <v-icon>mdi-axis-arrow</v-icon>
          {{ ayNow }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="2">
      <v-card color="success" class="mx-auto">
        <v-subheader class="white--text">Pergerakan z</v-subheader>
        <v-card-text class="white">
          <v-icon>mdi-axis-arrow</v-icon>
          {{ azNow }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-card color="orange" class="mx-auto">
        <v-subheader class="white--text">Orientasi</v-subheader>
        <v-card-text class="white">
          <v-icon>mdi-compass-rose</v-icon>
          {{ axNow }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-card color="blue lighten-4" class="mx-auto">
        <v-subheader class="white--text">Curah Hujan</v-subheader>
        <v-card-text class="white">
          <v-icon>mdi-weather-rainy</v-icon>
          {{ axNow }}
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
const dataTampil = 20;
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
        if (e.dev_id == "arusip_lora3") {
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
      this.lati = Vlat;
      this.longi = Vlng;
      this.axNow = nilaiAX_1[dataTampil - 1];
      this.ayNow = nilaiAY_1[dataTampil - 1];
      this.azNow = nilaiAZ_1[dataTampil - 1];
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
  components: { arusip, Map },
  mounted() {
    setInterval(this.generateData, 2000);
  },
};
</script>
