<template>
  <div class="doc-header">
    <div class="logo">
      <img :src="config.site.logo" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: Object,
  }
}
</script>

<style scoped lang="less">
.doc-header{
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #001938;
  padding: 0 60px;
  box-sizing: border-box;
  height: 60px;
  z-index: 9;
  .logo{
    width: 140px;
    height: 48px;
  }
}
</style>
