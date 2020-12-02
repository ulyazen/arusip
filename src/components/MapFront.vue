<template>
  <div class="map">
    <div style="height: 350px; width: 100%">
      <l-map :zoom="zoom" :center="center2">
        <l-marker :lat-lng="center" ></l-marker>
        <l-marker :lat-lng="center2" ></l-marker>
        <l-marker :lat-lng="center3" ></l-marker>
        
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    latitude1: Number,
    longitude1: Number,

    latitude2: Number,
    longitude2: Number,

    latitude3: Number,
    longitude3: Number,
  },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 8,
      center: [this.latitude1, this.longitude1],
      center2: [this.latitude2, this.longitude2],
      center3: [this.latitude3, this.longitude3],
      bounds: null,
    };
  },
};
</script>