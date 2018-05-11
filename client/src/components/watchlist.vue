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
      watchlist: [
        {
          name: 'Iron man',
        },
        {
          name: 'Thor',
        },
      ],
    };
  },
};
</script>

<style>

</style>
