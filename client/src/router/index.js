import Vue from 'vue';
import Router from 'vue-router';
import watchlist from '../components/watchlist';
import home from '../components/home';

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
  ],
});
