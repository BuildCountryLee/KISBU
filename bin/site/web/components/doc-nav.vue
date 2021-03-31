<template>
  <div class="doc-nav">
    <div v-for="(group, index) in nav" :key="index">
      <div class="doc-nav__title">{{group.title}}</div>
      <div v-for="(item, groupIndex) in group.items" :key="groupIndex">
        <div class="doc-nav__item">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: Array,
  }
}
</script>

<style scoped lang="less">
.doc-nav{
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  width: 200px;
  background-color: #FFF;

  @media (min-width: 1680px) {
    left: 50%;
    margin-left: -840px;
  }

  &__title {
    padding: 8px 0 8px;
    color: #455a64;
    font-weight: 500;
    font-size: 15px;
    line-height: 28px;
  }

  &__item {
    a {
      display: block;
      margin: 0;
      padding: 8px 0 8px 5px;
      color: #455a64;
      font-size: 14px;
      line-height: 28px;
      transition: color 0.2s;

      &:hover,
      &.active {
        color: #4fc08d;
      }

      &.active {
        -webkit-font-smoothing: auto;
      }

      span {
        font-size: 13px;
      }
    }
  }
}
</style>
