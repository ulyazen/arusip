<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet class="pa-4">
        <v-avatar color="" class="mb-0" size="64">
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
      icon: "mdi-account-circle",
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
      setTimeout(() => (this.loading = false), 3000);
    },
  },
};
</script>

