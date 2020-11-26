<template>
  <div class="map">
      <div style="height: 300px; width: 600px">
        <l-map :zoom="zoom" :center="center">
          <l-marker :lat-lng="center"></l-marker>
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        </l-map>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 16,
      center: [-7.83315,110.38311],
      bounds: null,
    };
  }
}
</script>