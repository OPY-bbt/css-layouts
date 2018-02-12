<template>
  <div class="container3">
      <div class="col1" style="width: 100px"></div>
      <div class="col2" style="width: 200px"></div>
      <div class="col3"></div>
  </div>
</template>

<style scoped>
  .container3 {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  .col1, .col2, .col3 {
    display: table-cell;
  }
  .col1 {
    background: green;
    /* width: 100px; */
    height: 300px;
  }
  .col2 {
    background: orange;
    /* width: 150px; */
    height: 400px;
  }
  .col3 {
    background: lime;
    width: 300px;
    height: 500px;
  }
</style>
