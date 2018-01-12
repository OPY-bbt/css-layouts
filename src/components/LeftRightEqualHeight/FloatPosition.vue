<template>
  <div class="container">
    <div class="rightWrap">
      <div class="contentWrap">
        <div class="leftWrap">
          <div id="left"><div style="height: 300px"></div></div>
          <div id="content"><div style="height: 400px"></div></div>
          <div cid="right"><div style="height: 500px"></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 960px;
    margin: 0 auto;
  }
  .rightWrap {
    width: 100%;
    float: left;
    background: green;
    overflow: hidden;
    position: relative;
  }
  .contentWrap {
    float: left;
    background: orange;
    width: 100%;
    position: relative;
    right: 320px; /*此值等于rightSidebar的宽度*/
  }
  .leftWrap {
    width: 100%;
    background: lime;
    float:left;
    position: relative;
    right: 420px; /*此值等于Content的宽度*/
  }
  #left {
    float: left;
    width: 220px;
    position: relative;
    left: 740px;
  }
  #content {
    float: left;
    width: 420px;
    position:relative;
    left: 740px;
  }
  #right {
    float: left;
    width: 320px;
    background: #333;
    position: relative;
    left: 740px;
  }
</style>
