<template>
  <div class="doc-nav">
    <div v-for="(group, index) in nav" :key="index">
      <div class="doc-nav__title">{{group.title}}</div>
      <div v-for="(item, groupIndex) in group.items" :key="groupIndex">
        <div class="doc-nav__item">
          <router-link
            :to="item.path"
            :class="{active: $route.path === `/${item.path}`}"
          >
            {{item.title}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: Array,
  },
}
</script>

<style lang="less">
.doc-nav{
  position: fixed;
  // padding-left: 20px;
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
    padding: 8px 0 8px 20px;
    color: #455a64;
    font-weight: 800;
    font-size: 15px;
    line-height: 28px;
  }

  &__item {

    a {
      display: block;
      margin: 0;
      padding: 8px 0 8px 30px;
      color: #455a64;
      font-size: 14px;
      line-height: 28px;
      transition: color 0.2s;

      &:hover,
      &.active {
        background-color: #fafafa;
        color: #2386EE;
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
