# type-picker 类别选择器

### 引入

```js
import { kisTypePicker } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<!-- 暂时只支持单列-->
<kis-type-picker :columns="columns" :show="show" @confirm="confirm" />

<script>
  export default {
    data() {
      return {
        show: true,
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      };
    },
    methods: {
      clear() {
        this.show = false;
      },
    },
  };
</script>
```

### Props

| 参数        | 说明           | 类型      | 默认值  |
| ----------- | :------------- | --------- | ------- |
| show        | 是否展示       | _boolean_ | `false` |
| disabled    | 是否禁用       | _boolean_ | `false` |
| showBar     | 默认显示顶部栏 | _boolean_ | `true`  |
| confirmText | 确认按钮文字   | _string_  | `确认`  |
| cancelText  | 取消按钮文字   | _string_  | `取消`  |
| columns     | 选择类目       | _array_   | `[ ]`   |
| height      | 选项高度       | _number_  | `44`    |
| popHeight   | 弹出框高度     | _number_  | `240`   |
| countnum    | 可见的选项个数 | _number_  | `4`     |
| index       | 默认显示索引   | _number_  | `0`     |

### Events

| 事件名  |        说明        |                                         回调参数 |
| ------- | :----------------: | -----------------------------------------------: |
| change  |   选项改变时触发   |            Picker 实例，选中值，选中值对应的索引 |
| confirm | 点击完成按钮时触发 | _item({item:'杭州',index:0})_ 选中值及对应的索引 |
| cancel  | 点击取消按钮时触发 |                                                - |
