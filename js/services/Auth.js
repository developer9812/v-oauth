export default class Auth {
  constructor(){
    username : ''
  }
  setUsername(user){
    this.username = user;
  }
  getUsername(){
    return this.username;
  }
  setAccessToken(token){
      localStorage.setItem('access_token', token);
  }
  setTokenExpiry(expiry){
      let date = new Date();
      date.setSeconds((date.getSeconds()) + expiry);
      localStorage.setItem('token_expiry', date);
  }
  setRefreshToken(refreshToken){
      localStorage.setItem('refresh_token', refreshToken);
  }
  getTokenExpiry(){
      return Date.parse(localStorage.getItem('token_expiry'));
  }
  getAccessToken(token){
      return localStorage.getItem('access_token');
  }
  getRefreshToken(){
      return localStorage.getItem('refresh_token');
  }
  getNewToken()
  {
    axios.post('http://192.168.1.239/oauth/token',{
      'grant_type': 'refresh_token',
      'refresh_token': this.getRefreshToken(),
      'client_id': 3,
      'client_secret': 'ko6rNonoLbVWdLvkbM8Bkjtdmz1vfhugz2VYePF6',
      'scope': ''
    }).then(response => {
      this.setTokenExpiry(response.data.expires_in);
      this.setAccessToken(response.data.access_token);
      this.setRefreshToken(response.data.refresh_token);
      return true;
    }).catch(error => {
      console.log(error);
      return false;
    });
  }

  isAuthenticated()
  {
    if(
      this.getAccessToken() != null
        &&
      ( this.getTokenExpiry() > Date.parse( new Date() ) )
    ) {
        console.log("AUTH SUCCESS");
        return true;
    }
    else
    {
        if( this.getRefreshToken() != null ){
          return this.getNewToken();
        } else {
          console.log("AUTH FAIL");
          return false;          
        }
    }
  }
}

/*export class Main{
   contsructor(){
     this.name = 'H';
   }
   setName(){

   }
 }*/
