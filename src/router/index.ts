import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import RecipeCard from '@/components/molecules/RecipeCard.vue';
import HomeView from '../views/HomeView.vue';
import FoodView from '../views/FoodView.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: FoodView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/food',
    name: 'food',
    component: FoodView,
    children: [
      {
        path: '#:id',
        name: 'recipecard',
        component: RecipeCard,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
