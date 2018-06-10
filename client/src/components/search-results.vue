<template>
  <div class="search-results">
    Results:
    <ul>
      <li v-for="movie in results" :key="movie.id">
        {{ movie.original_title }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'search-results',
  computed: {
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
