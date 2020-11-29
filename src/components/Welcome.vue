<template>
  <v-container>
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
        <v-text class="subheading font-weight-regular">
          <h1 class="display-2 font-weight-medium mb-3">
            Selamat Datang pada PantauLongsor.id
          </h1>
          Universitas Ahmad Dahlan
          <br />Alamat: Jl. Kapas No.9, Semaki, Kec. Umbulharjo , Kota
          Yogyakarta, Daerah Istimewa Yogyakarta 55166
        </v-text>
      </v-layout>
    </v-layout>
  </v-container>
</template>