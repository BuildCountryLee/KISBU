# date-picker 时间选择器

### 引入

```js
import { kisDatePicker } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-date-picker :mindate="mindate" :show="show" :curdate="curdate" />

<script>
  export default {
    data() {
      return {
        show: true,
        curdate: '2021-03-01',
        mindate: '2000-01-01',
        maxdate: '2021-12-31',
      };
    },
  };
</script>
```

### Props

| 参数        | 说明           | 类型      | 默认值       |
| ----------- | -------------- | --------- | ------------ |
| show        | 是否展示       | _boolean_ | `false`      |
| showBar     | 是否显示顶部栏 | _boolean_ | `true`       |
| confirmText | 确认按钮文字   | _string_  | `确定`       |
| cancelText  | 取消按钮文字   | _string_  | `取消`       |
| curdate     | 当前显示日期   | _string_  | `-`          |
| mindate     | 可选的最小日期 | _string_  | `1900/1/1` |
| maxdate     | 可选的最大日期 | _string_  | `2080/12/31` |

### Events

| 事件名  |        说明        |                         回调参数 |
| ------- | :----------------: | -------------------------------: |
| change  |   选项改变时触发   | _value('2020-01-01')_ 修改的日期 |
| confirm | 点击确定按钮时触发 | _value('2020-01-01')_ 选中的日期 |
| cancel  | 点击取消按钮时触发 |                                - |
