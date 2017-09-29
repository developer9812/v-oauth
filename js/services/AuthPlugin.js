import Auth from './Auth';

export default {
  install : function(Vue){
    Object.defineProperty(Vue.prototype, '$auth', { value: new Auth()});
  }
}
