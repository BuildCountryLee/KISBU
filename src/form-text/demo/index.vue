<template>
  <demo-section>
    <demo-block title="基础用法">
      <kis-formtext :ismust="true" :label="label" text="我是测试" />
    </demo-block>
    <demo-block title="超长显示">
      <kis-formtext
        :isoverflow="false"
        :label="label"
        text="我是好长超长我是好长超长我是好长超长"
      />
    </demo-block>
    <demo-block title="省略显示">
      <kis-formtext
        :label="label"
        text="我是好长超长我是好长超长我是好长超长"
      />
    </demo-block>
    <demo-block title="修改颜色">
      <kis-formtext :label="label" color="#2386EE" text="我是蓝色" />
    </demo-block>
    <demo-block title="事件绑定">
      <kis-formtext :label="label" :text="text" @clicktext="clicktext" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      label: 'label',
      text: '点击我',
    };
  },
  methods: {
    clicktext() {
      if (this.text == '点击我') {
        this.text = '我被点击了';
      } else {
        this.text = '点击我';
      }
    },
  },
};
</script>
