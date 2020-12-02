<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet class="pa-4">
        <v-avatar class="mb-0" size="64">
          <v-icon color="primary" x-large>{{ icon }}</v-icon></v-avatar
        >
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title class="title">
              PantauLongsor.id
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
      <v-divider></v-divider>
      <v-list-item-group nav dense>
        <v-list-item-group active-class="primary--text text--accent-4">
          <v-list-item
            v-once
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
            @click="loading = true"
          >
            <v-list-item-icon>
              <v-icon color="primary">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list-item-group>

      <v-list-item>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn block color="primary" dark v-bind="attrs" v-on="on" tile
              ><v-icon left> mdi-plus-box</v-icon> Tambah Lokasi
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Tambah Lokasi Device</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Nama Lokasi" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Tutup
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">  
                Simpan
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list-item>
    </v-navigation-drawer>
    <v-main class="grey lighten-4">
      <v-container class="py-0 px-0" fluid>
        <v-card flat>
          <v-toolbar color="primary" dark extended tile>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </v-toolbar>
          <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            color="red darken-2 accent-4"
          ></v-progress-linear>
          <v-container class="grey lighten-4" fluid>
            <router-view />
          </v-container>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data() {
    return {
      icon: "mdi-compass-rose",
      dialog: false,
      loading: false,
      drawer: null,
      menuItems: [
        { icon: "mdi-map-marker", title: "Sidomulyo", link: "/sidomulyo" },
        {
          icon: "mdi-map-marker",
          title: "Hargobinangun",
          link: "/hargobinangun",
        },
        { icon: "mdi-map-marker", title: "Imogiri", link: "/imogiri" },
      ],
    };
  },

  watch: {
    loading(val) {
      if (!val) return;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

