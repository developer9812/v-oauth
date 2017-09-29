window.Vue = require('vue');

window.axios = require('axios');

import AuthPlugin from './services/AuthPlugin';
//import {Main} from './services/Auth';
import Auth from './services/Auth';
window.Auth = new Auth();

//Object.defineProperty(Vue.prototype, '$auth', { value: new Auth()});
//window.Main = Main;
// Vue.use(AuthPlugin);
// Vue.prototype.$auth = new Auth();

/*new Vue({
  created(){
    console.log(this.$authplugin ? 'AUTH PLuGIN': 'PLUGIN PROB');
  }
})*/
