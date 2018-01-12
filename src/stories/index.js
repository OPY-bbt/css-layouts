import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import Centered from '@storybook/addon-centered';

import MyButton from '../components/Button.vue';
import App from '../App.vue';
import { resolve } from 'url';
import { setTimeout } from 'timers';

import Flex from '../components/LeftStaticRightAuto/Flex.vue';
import Float from '../components/LeftStaticRightAuto/Float.vue';
import Float2 from '../components/LeftStaticRightAuto/Float2.vue';

import FloatPosition from '../components/LeftRightEqualHeight/FloatPosition.vue';
import FloatPosition2 from '../components/LeftRightEqualHeight/FloatPosition2.vue';
import TwoColBorder from '../components/LeftRightEqualHeight/TwoColBorder.vue';

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

// 左侧定宽，右侧自适应
// 左右两列等高布局
// 左右两列要求有最小高度，例如：200px;（当内容超出200时，会自动以等高的方式增高)

storiesOf('左侧定宽，右侧自适应', module)
  .add('flex', () => ({
    render: h => h(Flex)
  }))
  .add('float + marginLeft', () => ({
    render: h => h(Float)
  }))
  .add('float + marginLeft 2', () => ({
    render: h => h(Float2)
  }));

storiesOf('左右两列 等高布局', module)
  .add('float + marginLeft', () => ({
    render: h => h(FloatPosition)
  }))
  .add('float + marginLeft 2', () => ({
    render: h => h(FloatPosition2)
  }))
  .add('with border', () => ({
    render: h => h(TwoColBorder)
  }))
