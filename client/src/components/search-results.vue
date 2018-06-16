<template>
  <div class="search-results">
    <div>Search results:</div>
    <ul v-if="results">
      <li v-for="movie in results" :key="movie.id">
        <router-link :to="`/movie/${movie.id}`">{{ movie.original_title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'search-results',
  computed: {
    searchQuery() {
      return store.state.searchQuery;
    },
    results() {
      if (store.state.searchResults) {
        return store.state.searchResults.results;
      }
      return [];
    },
  },
};
</script>

<style lang="scss">
  .search-results {

  }
</style>
