
<script>
//import Vue from 'vue';
require('./js/bootstrap.js');
import Router from 'vue-router';
import Login from './login.vue';
import Index from './success.vue';
import Home from './home.vue';
import About from './about.vue';
import ContactUs from './contactus.vue';
//import Bootstrap from './js/bootstrap.js';

Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'success',
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/about',
          component: About
        },
        {
          path: '/contactus',
          component: ContactUs
        }
    ]},
    {
      path: '/login',
      component: Login,
    }]
});
router.beforeEach((to, from, next) => {
  console.log("BEOFRE ROUTE");
  console.log(this.$auth);
  if(Auth.isAuthenticated()){
    next();
   }
  else if(to.fullPath == '/login'){
    console.log('elseif access');
    next();
  }else{
    console.log('else');
    DataStore.intended = to.fullPath;
    next({
      path: '/login'
    });
  }
});
export default router;

</script>
