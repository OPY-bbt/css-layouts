import Vue from 'vue';
import App from './App.vue';

import MyButton from './components/Button.vue';

new Vue({
  el: '#app',
  render: h => h(App),
});

Vue.component('my-button', MyButton)
