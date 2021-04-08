# date-picker-start 时间选择器（有开始和结束）

### 引入

```js
import { kisDatePickerStart } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-date-picker-start
  :start="start"
  :end="end"
  :show="show"
  :title="title"
  :curdate="curdate"
/>

<script>
  export default {
    data() {
      return {
        show: true,
        title: '自定义日期',
        curdate: '2021-03-01',
        start: '2000-01-01',
        end: '2021-12-31',
      };
    },
  };
</script>
```

### Props

| 参数     | 说明           | 类型      | 默认值                    |
| -------- | -------------- | --------- | ------------------------- |
| show     | 是否展示       | _boolean_ | `false`                   |
| tabindex | tab 强提示     | _number_  | `0`（0 是开始，1 是结束） |
| title    | 顶部标题       | _string_  | `自定义日期`              |
| curdate  | 当前显示日期   | _string_  | `-`                       |
| start    | 开始日期       | _string_  | -                         |
| end      | 结束日期       | _string_  | -                         |
| mindate  | 可选的最小日期 | _string_  | `1900/1/1`                |
| maxdate  | 可选的最大日期 | _string_  | `2080/12/31`              |

### Events

| 事件名    |        说明        |                         回调参数 |
| --------- | :----------------: | -------------------------------: |
| changeTab |   tab 改变时触发   |               _index_ tab 索引值 |
| change    |   选项改变时触发   | _value('2020-01-01')_ 修改的日期 |
| confirm   | 点击确定按钮时触发 | _value('2020-01-01')_ 选中的日期 |
| cancel    | 点击取消按钮时触发 |                                - |
