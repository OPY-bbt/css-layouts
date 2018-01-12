<template>
  <div class="container3">
    <div class="container2">
      <div class="container1">
        <div class="col1"><div style="height: 300px"></div></div>
        <div class="col2"><div style="height: 400px"></div></div>
        <div class="col3"><div style="height: 500px"></div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container3 {
    width: 100%;
    float: left;
    background: green;
    overflow: hidden;
    position: relative;
  }
  .container2 {
    float: left;
    background: orange;
    width: 100%;
    position: relative;
    right: 30%;/*此值等于rightSidebar的宽度*/
  }
  .container1 {
    width: 100%;
    background: lime;
    float:left;
    position: relative;
    right: 30%;/*此值等于Content的宽度*/
  }
  .col1 {
    float: left;
    width: 40%;
    position: relative;
    left: 100%;
  }
  .col2 {
    float: left;
    width: 30%;
    position:relative;
    left: 100%;
  }
  .col3 {
    float: left;
    width: 30%;
    background: #333;
    position: relative;
    left: 100%;
  }
</style>
