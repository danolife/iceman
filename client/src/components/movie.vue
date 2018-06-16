<template>
  <div>
    <template v-if="movie">
      <h2>{{ movie.title }}</h2>
    </template>
    <h1 v-else>Loading movie #{{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'movie',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  watch: {
    $route: 'onRouteChange',
  },
  created() {
    this.onRouteChange();
  },
  data() {
    return {
      movie: {},
    };
  },
  methods: {
    onRouteChange() {
      fetch(`http://localhost:8081/movie/${this.id}`)
        .then(response => response.json())
        .then(movie => {
          this.movie = movie;
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
