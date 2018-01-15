<template>
  <div>
    <div class="wrap1">
      张岩<span class="content1">middle</span><img class="img" src="../../assets/avatar.jpg" />
    </div>
    <div class="wrap1">
      张岩<span class="content1 content2">25px</span>
    </div>
    <p>
      设置了vertical-align 元素内文字以父元素文字中线对齐 但是span元素还不是很居中，有些强迫症的我感觉不能容忍。
      最后发现，vertical-align 设置了父元素字体大小的25% 才差不多达到效果。但是
      还不是很优雅， 希望有些更好的解决方法。
    </p>
  </div>  
</template>

<style scoped>
  .wrap1 {
    font-size: 100px;
  }

  .content1 {
    display: inline-block;
    font-size: 20px;
    width: 90px;
    height: 30px;
    line-height: 30px;
    background-color: #999;
    color: #FFF;
    vertical-align: middle;
  }
  .content2 {
    vertical-align: 25px;
  }

  .img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
</style>
