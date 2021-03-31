<template>
  <div class="app">
    <kis-doc
      :config="config"
    >
      <router-view></router-view>
    </kis-doc>
  </div>
</template>

<script>
import { config } from 'site-desktop-shared';
import KisDoc from './components';

export default {
  data() {
    return {
      config,
    }
  },
  components: {
    KisDoc
  }
}
</script>

<style lang="less">
@import '../common/style/base.less';

</style>