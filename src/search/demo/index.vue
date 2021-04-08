<template>
  <demo-section>
    <demo-block title="基础用法">
      <kis-search :placeholder="placeholder"></kis-search>
    </demo-block>
    <demo-block title="显示关键字">
      <kis-search
        :placeholder="placeholder"
        keyword="文本内容"
      ></kis-search>
    </demo-block>
    <demo-block title="搜索框内容对齐">
      <kis-search
        :placeholder="placeholder"
        inputAlign="center"
      ></kis-search>
    </demo-block>
    <demo-block title="禁用搜索框">
      <kis-search
        :placeholder="placeholder"
        :disabled="true"
      ></kis-search>
    </demo-block>
    <demo-block title="事件监听">
      <kis-search
        showAction
        clearable
        v-model="value"
        :placeholder="placeholder"
        @blur="toEvent('blur')"
        @input="toEvent('input')"
        @focus="toEvent('focus')"
        @clear="toEvent('clear')"
        @cancel="toEvent('cancel')"
        @search="search"
      ></kis-search>
    </demo-block>
    <demo-block title="自定义背景色">
      <kis-search
        :placeholder="placeholder"
        background="#2386EE"
        shape="round"
      ></kis-search>
    </demo-block>
    <demo-block title="自定义按钮">
      <kis-search
        :placeholder="placeholder"
        showAction
        label="地址"
      >
        <!-- <template #label>地址333</template> -->
        <template #action>搜索</template>
      </kis-search>
    </demo-block>
    <demo-block title="自定义搜索框内左右图标">
      <kis-search
        :placeholder="placeholder"
        showAction
      >
        <template #left-icon>
          <div class="yellow"></div>
        </template>
        <template #right-icon>
          <div class="blue"></div>
        </template>
      </kis-search>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      placeholder: '请输入搜索的关键字',
      value: '',
    };
  },
  methods: {
    toEvent(type) {
      console.log(type);
    },
    search(val) {
      console.log(val);
      console.log(this.value);
    },
  },
};
</script>

<style lang="less" scoped>
.yellow {
  background-color: yellow;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.blue {
  background-color: blue;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
</style>