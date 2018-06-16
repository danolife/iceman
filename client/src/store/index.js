import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchQuery: '',
    searchResults: {},
  },
  mutations: {
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults;
    },
    clearSearch(state) {
      state.searchQuery = '';
      state.searchResults = {};
    },
  },
});

export default store;
