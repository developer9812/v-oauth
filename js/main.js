//import Vue from 'vue';
// import LoginComponent from '../login.vue';
require('./bootstrap.js');
import Router from '../route.vue';

// import SuccessComponent from '../success.vue';

window.DataStore = {
  intended: '/',
  authenticated: false,
  username: '',
  password: ''
};
var app = new Vue({
  el: "#root",
  data: {
    username: '',
    authenticated: false
  },
  created: function(){
    console.log(this.$auth);
  },
  methods: {
    setUsername: function(username){
      this.username = username;
      this.authenticated = true;
    }
  },
  router: Router
});
