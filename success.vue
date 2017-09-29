<style>
  .success{
    color: green;
  }
  .header{
    background: whitesmoke;
    font-family: sans-serif;
    padding: 8px;
    display: flex;
  }
  .header-user{
    display: flex;
    justify-content: flex-end;
    float: right;
  }
  center{
    font-size: 22px;
  }
  .router-link{
    margin: 5px;
    flex: 1;
  }
  .logout-link{
    flex: 5;
    display: flex;
    justify-content: flex-end;
  }
  .logout-link a{
    margin: 5px;
  }
  .logout-link a:hover{
    cursor: pointer;
    color: dodgerblue;
      margin: 5px;
  }
  .table{
    border: 1px solid gray;
  }
  th{
    border: 1px solid grey;
    padding: 15px;
  }
  td{
    border: 1px solid grey;
    padding: 15px;
  }
  ul{
    list-style-type: none;
  }
  li{
    border-top: 0.5px solid lightgrey;
    padding: 2px;
  }
  h2,h4{
    margin: 5px;
  }
</style>
<template>
  <div>
    <div class="header">
       <router-link class="router-link" to="/home"> Home</router-link>
       <router-link class="router-link" to="/about"> About</router-link>
       <router-link class="router-link" to="/contactus"> Contact us</router-link>
       <h2 class="header-user"> Welcome {{ username | Upper}} </h2>
       <div class="logout-link">
         <a @click="logout">Logout</a>
       </div>
    </div>
    <div>
      <!-- <h2> Welcome {{$route.params.id}} </h2> -->
      <center> You have successfully logged in </center>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import axios from 'axios';
  import router from './route.vue';
  export default {
  //  Router: Router,

    data: function(){
      return {
        username: DataStore.username
      }
    },
    filters: {
      Upper(uname){
        return uname.charAt(0).toUpperCase()+ uname.slice(1);
      }
    },
    created: function(){
      this.getUsers();
    },
    methods: {
      logout: function()
      {
        DataStore.authenticated = false;
        DataStore.username = "";
        DataStore.intended = "/login";
        this.$router.push(DataStore.intended);
      },
      getUsers: function(){
        axios.get('http://192.168.1.239/api/users',{
          headers: {
            'Authorization': 'Bearer '+ Auth.getAccessToken()
          }
        }).then(response => {
            console.log(response);
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>
