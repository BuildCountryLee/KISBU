<template>
  <div class="kis-doc">
    <doc-header :config="config"></doc-header>
    <doc-nav :nav="config.nav"></doc-nav>
    <doc-container>
      <doc-content>
        <slot></slot>
      </doc-content>
    </doc-container>
  </div>
</template>

<script>
import DocHeader from './doc-header';
import DocNav from './doc-nav';
import DocContainer from './doc-container';
import DocContent from './doc-content';

export default {
  props: {
    config: Object,
  },
  mounted() {
    console.log(this.config);
  },
  components: {
    DocHeader,
    DocNav,
    DocContainer,
    DocContent,
  }
}
</script>

<style scoped lang="less">
.kis-doc{
  height: 100%;
}
</style>
