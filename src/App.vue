<template>
  <div class="wrap">
    <h1>VUE</h1>
    <h2>{{ msg }}</h2>
    <my-button>click me!</my-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'welcome'
    }
  }
}
</script>

<style>
  .wrap {
    text-align: center;
  }
</style>


