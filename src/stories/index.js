import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import Centered from '@storybook/addon-centered';

import MyButton from '../components/Button.vue';
import App from '../App.vue';
import { resolve } from 'url';
import { setTimeout } from 'timers';

storiesOf('App', module)
  .addDecorator(Centered)
  .add('App', () => ({
    render: h => h(App)
  }));

storiesOf('Button used in test', module)
  .addDecorator(Centered)
  .add('compnent', () => ({
    template: '<my-button>click me!</my-button>',
  }))
  .add('vuex', () => ({
    template: '<my-button :handle-click="log">with vuex: {{ $store.state.count }}</my-button>',
    store: new Vuex.Store({
      state: { count: 0 },
      mutations: {
        increment(state) {
          state.count += 1;
          action('vuex state')(state);
        },
      },
    }),
    methods: {
      log() {
        this.$store.commit('increment');
      }
    }
  }))
  .add('vuex async action', () => ({
    template: `<my-button :handle-click="log">
      with vuex async : {{ $store.state.count }}
      <span style="margin-left: 20px" v-if="$store.state.isShowWait">waiting...</span>
      <span style="margin-left: 20px" v-else>click me!</span>
    </my-button>`,
    store: new Vuex.Store({
      state: { count: 0, isShowWait: false },
      mutations: {
        increment(state) {
          state.count += 1;
          action('increment')(state);
        },
        decrement(state) {
          state.count -= 1;
          action('decrement')(state);
        },
        isShowWait(state, payload) {
          state.isShowWait = payload;
          action('isShowWait')(state);
        }
      },
      actions: {
        delay(_, ms = 1000) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {resolve();}, ms)
          })
        },
        async increment ({ dispatch, commit }) {
          commit('isShowWait', true);
          await dispatch('delay');
          commit('increment');
          await dispatch('delay', 2000);
          commit('decrement');
          commit('isShowWait', false);
        }
      }
    }),
    methods: {
      log() {
        this.$store.dispatch('increment');
      }
    }
  }))

