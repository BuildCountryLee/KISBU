import Vue from 'vue';
import VueRouter from 'vue-router';
import { documents } from 'site-desktop-shared';
import Home from './components/doc-home';

Vue.use(VueRouter);

function getRoutes(documents) {
  const names = Object.keys(documents);

  const routes = names.map(name => {
    return {
      name,
      path: `/${name.toLowerCase()}`,
      component: documents[name]
    }
  });

  routes.unshift({
    path: '/home',
    component: Home
  });

  routes.unshift({
    path: '/',
    redirect: 'home'
  });

  return routes;
}

const router = new VueRouter({
  routes: getRoutes(documents)
});

export default router;