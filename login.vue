<style>
  .container{
    background: whitesmoke;
    display: flex;
    font-family: sans-serif;
  }
  .content{
    flex: 1;
    margin: 2rem;
  }
  .login-div{
    padding: 15px;
    background: white;
    display: flex;
    flex-direction: column;
  }
  .user-div{
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  input{
    border: 1px solid grey;
    border-radius: 5px;
    padding: 0.5rem;

  }
  input:focus {
    border: 1px solid dodgerblue;
    outline: none;
    transition: all 0.5s;
  }
  button{
    padding: 0.5rem;
    color: white;
    background: dodgerblue;
    border-radius: 5px;
    font-size: medium;
  }
  label{
    font-weight: 600;
    justify-content: flex-start;
  }
  .fade-effect-enter {
    opacity: 0;
  }
  .fade-effect-enter-active {
    transition: opacity 1s ease-in;
  }
  .fade-effect-leave-active {
    transition: opacity 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-effect-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

</style>

<template>
  <div class="container">
    <div class="content"></div>
    <div class="content">
      <form>
      <div class="login-div">
        <div class="user-div"><h2> Login </h2></div>
        <div class="user-div">
          <label> Username </label>
          <input class="input-class" v-model="form.username" type="text" id="uname" placeholder="Enter Username" />
        </div>
        <div class="user-div">
          <label> Password </label>
          <input v-model="form.password" type="password" id="pass" placeholder="Enter Password" />
        </div>
        <div class="user-div">
          <button v-on:click.prevent="submitData()" class=""> Submit </button>
        </div>
      </div>
     </form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Router from './route.vue';

  export default{
    data: function(){
      return{
        form: {
          username: '',
          password: ''
        }
      }
    },
    router: Router,
    created: function(){
      console.log(this.$auth);
    },
    methods:{
      submitData(){
        axios.post('http://192.168.1.239/oauth/token',{
          'username': this.form.username,
          'password': this.form.password,
          'grant_type': 'password',
          'client_id': 3,
          'client_secret': 'ko6rNonoLbVWdLvkbM8Bkjtdmz1vfhugz2VYePF6',
          'scope': ''
        }).then(response => {
          this.$emit('login-success', this.form.username);
          DataStore.username = this.form.username;
          Auth.setTokenExpiry(response.data.expires_in);
          Auth.setAccessToken(response.data.access_token);
          Auth.setRefreshToken(response.data.refresh_token);
          this.$router.push(DataStore.intended);
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>
