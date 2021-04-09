import Vue from 'vue';
import VueRouter from 'vue-router';
import { documents } from 'site-desktop-shared';
import Home from './components/doc-home';
import {decamelize} from '../common';

Vue.use(VueRouter);

function getRoutes(documents) {
  const names = Object.keys(documents);

  console.log(decamelize);
  const routes = names.map(name => {
    return {
      name,
      path: `/${decamelize(name)}`,
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

  console.log(routes);

  return routes;
}

const router = new VueRouter({
  routes: getRoutes(documents)
});



export default router;