<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/watchlist">Watchlist</router-link>
    </div>
    <search-bar/>
    <search-results/>
    <router-view/>
  </div>
</template>

<script>
import SearchBar from './components/search-bar';
import SearchResults from './components/search-results';

export default {
  name: 'App',
  components: { SearchBar, SearchResults },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
