import Vue from 'vue';
import Router from 'vue-router';
import watchlist from '@/components/watchlist';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'watchlist',
      component: watchlist,
    },
  ],
});
