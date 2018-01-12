<template>
  <div class="wrap">
    <div class="left"></div>
    <div class="right">
      <div class="inner"></div>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    width: 100%;
  }
  .left {
    width: 100px;
    height: 500px;
    background-color: aquamarine;
    float: left;
    margin-right: -100%;
  }
  .right {
    width: 100%;
    float: left;
    height: 500px;
    background-color: bisque;
  }
  .inner {
    margin-left: 100px;
    background-color: chartreuse;
    height: 500px;
  }
</style>
