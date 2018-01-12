<template>
  <div>
    <button class="size" @click="handleClick"><slot></slot></button>
  </div>
</template>

<script>
export default {
  props: {
    handleClick: {
      default: () => () => {
        console.log('click');
      }
    }
  },
}
</script>

<style>
  .size {
    padding: 10px 20px;
    margin-bottom: 10px;
  }
</style>
