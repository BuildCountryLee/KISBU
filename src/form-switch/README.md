# form-switch 表单 switch 选择

### 引入

```js
import { kisFormSwitch } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-form-switch :label="label" :show="true" :choose="true" />

<script>
  export default {
    data() {
      return {
        label: '是否开启系统管理',
      };
    },
  };
</script>
```

### Props

| 参数       | 说明             | 类型      | 默认值  |
| ---------- | :--------------- | --------- | ------- |
| show       | 是否展示         | _boolean_ | `true`  |
| isoverflow | 文字是否隐藏显示 | _boolean_ | `true`  |
| disabled   | 是否不可点击     | _boolean_ | `false` |
| label      | 左侧标题         | _string_  | `-`     |
| choose     | 是否选中         | _boolean_ | `false` |

### Events

| 事件名 |       说明       | 回调参数 |
| ------ | :--------------: | -------: |
| change | 触发 switch 事件 |        - |
