<template>
  <div class="doc-container">
    <slot />
  </div>
</template>

<script>
import {documents} from 'site-desktop-shared';

export default {
  components: {
    KisButton: documents.KisButton,
  }
}
</script>

<style scoped lang="less">
.doc-container{
  margin: 0 auto;
  padding-left: 200px;
  width: 100%;
  box-sizing: border-box;
  // background-color: lightcoral;

  @media (min-width: 1680px) {
    width: 1680px;
  }
}
</style>