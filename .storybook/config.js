import 'babel-polyfill';
import { configure } from '@storybook/vue';
import Vue from 'vue'
import Vuex from 'vuex'

import MyButton from '../src/components/Button.vue'

Vue.component('my-button', MyButton)
Vue.use(Vuex)

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);