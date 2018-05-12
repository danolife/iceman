<template>
  <div>
    <ul>
      <li v-for="movie in watchlist" :key="movie.name">{{movie.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'watchlist',
  data() {
    return {
      watchlist: [],
    };
  },
  created() {
    fetch('http://localhost:8081/watchlist')
      .then(response => response.json())
      .then(watchlist => {
        this.watchlist = watchlist;
      });
  },
};
</script>

<style>

</style>
