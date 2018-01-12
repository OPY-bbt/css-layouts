<template>
  <div class="wrap">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<style scoped>
  .wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .left {
    flex: 0 0 100px;
    height: 500px;
    background-color: aquamarine;
  }
  .right {
    flex: 1 1 auto;
    height: 500px;
    background-color: bisque;
  }
</style>
