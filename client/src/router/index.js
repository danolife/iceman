import Vue from 'vue';
import Router from 'vue-router';
import watchlist from '../components/watchlist';
import home from '../components/home';
import movie from '../components/movie';
import searchResults from '../components/search-results';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: watchlist,
    },
    {
      path: '/search',
      name: 'search',
      component: searchResults,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: movie,
      props: true,
    },
  ],
});
