<template>
  <div id="app">
    <div class="topbar">
      <div class="topbar__link"><router-link to="/">Home</router-link></div>
      <div class="topbar__link"><router-link to="/watchlist">Watchlist</router-link></div>
      <div class="topbar__spacer"></div>
      <search-bar/>
    </div>
    <div class="content">
      <search-results v-if="shouldDisplayResults"/>
      <router-view v-else/>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/search-bar';
import SearchResults from './components/search-results';
import store from './store';

export default {
  name: 'App',
  components: { SearchBar, SearchResults },
  computed: {
    shouldDisplayResults() {
      return store.getters.shouldDisplayResults;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
}

.topbar {
  flex-shrink: 0;
  flex-grow: 0;
  background-color: #BBFFFF;
  height: 48px;
  padding: 8px;
  display: flex;
  &__link {
    padding: 0 8px;
    height: 48px;
    line-height: 48px;
  }
  &__spacer {
    flex-grow: 1;
  }
}
.content {
  flex-grow: 1;
  padding: 32px;
}
</style>
