<template>
  <demo-section>
    <demo-block title="基础用法">
      <kis-switch @change="change" :value="value" />
    </demo-block>
    <demo-block title="禁用">
      <kis-switch @change="change" :value="true" :disabled="true" />
    </demo-block>
    <!-- <demo-block :title="'基础用法'">
      <kis-switch @change="change" :value="true" :disabled="true" />
    </demo-block> -->
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      value: true,
    };
  },
  methods: {
    change() {
      this.value = !this.value;
    },
  },
};
</script>
