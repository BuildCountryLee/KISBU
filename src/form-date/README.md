# form-date 表单跳转分录行

### 引入

```js
import { kisFormDate } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-form-date :label="label" :show="true" :text="text" :ismust="false" />

<script>
  export default {
    data() {
      return {
        label: '选择日期',
        text: '2020-01-01',
      };
    },
  };
</script>
```

### Props

| 参数     | 说明               | 类型               | 默认值  |
| -------- | :----------------- | ------------------ | ------- |
| show     | 是否展示           | _boolean_          | `false` |
| ismust   | 是否强调必录       | _boolean_          | `true`  |
| dateData | 有关日期组件的数据 | _object_           | `{ }`   |
| label    | 左侧标题           | _string_           | `-`     |
| notext   | 没有显示内容       | _boolean_          | `false` |
| text     | 右侧显示内容       | _number \| string_ | `-`     |

```js
// dateData 数据
dateData = {
  show: true,
  curdate: '2021-03-01',
  mindate: '2000-01-01',
  maxdate: '2021-12-31',
  item: {}, // 当前数据，非固定格式，由外部传入组件
};
```

### Events

| 事件名      |       说明       |                                     回调参数 |
| ----------- | :--------------: | -------------------------------------------: |
| navto       | 触发点击跳转事件 |                                            - |
| confirmDate | 点击确定日期事件 | `(val,item)`当前返回日期，当前分录 item 数据 |
| cancelDate  | 点击取消日期事件 |                                            - |
