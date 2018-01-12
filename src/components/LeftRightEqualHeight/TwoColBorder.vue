<template>
  <div class="wrapper">
    <div class="sidebar">sidebar</div>
    <div class="main">main</div>
  </div>
</template>

<style>
  html {
    background-color: #45473f;
    height: auto;
  }
  body {
    width: 960px;
    margin: 20px auto;
    background: #ffe3a6;
  }
  .wrapper {
    display: inline-block;
    border-left: 200px solid #d4c376;
    position: relative;
    vertical-align: bottom;
  }
  .sidebar {
    float: left;
    width: 200px;
    margin-left: -200px;
    margin-right: -1px;
    border-right: 1px solid #888;
    position: relative;
  }
  .main {
    float: left;
    border-left: 1px solid #888;
  }
  .sidebar {
    padding-bottom: 12em;
  }
  .main {
    padding-bottom: 4em;
  }
</style>
