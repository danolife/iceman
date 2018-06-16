<template>
  <div class="search-bar">
    <input type="text"
           placeholder="Search"
           @input="search"
           :value="searchQuery"
    />
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'search-bar',
  computed: {
    searchQuery() {
      return store.state.searchQuery;
    },
  },
  data() {
    return {
      delayedSearchTimeoutId: null,
    };
  },
  methods: {
    search(event) {
      const query = event.target.value;
      if (query !== '') {
        this.$router.push({ name: 'search' });
      } else {
        this.$router.push({ name: 'home' });
      }
      store.commit('setSearchQuery', query);
      clearTimeout(this.delayedSearchTimeoutId);
      this.delayedSearchTimeoutId = setTimeout(() => {
        fetch(`http://localhost:8081/search?query=${store.state.searchQuery}`)
          .then(response => response.json())
          .then(results => {
            store.commit('setSearchResults', results);
          })
          .catch(error => console.error(error));
      }, 300);
    },
  },
};
</script>

<style lang="scss">
  .search-bar {
    input {
      height: 32px;
      padding: 8px 16px;
      border-radius: 32px;
      border: 1px solid #dadbdc;
      outline: none;
      font-size: 22px;
      width: 400px;
      z-index: 2;
    }
  }
</style>
