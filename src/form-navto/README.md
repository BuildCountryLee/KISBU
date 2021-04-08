# form-navto 表单跳转分录行

### 引入

```js
import { kisFormNavto } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-form-navto :label="label" :show="true" :text="text" :ismust="false" />
<kis-form-navto
  :label="label"
  :show="true"
  :text="text"
  :isclear="true"
  :error="请选择业务员"
  @clear="clear"
/>

<script>
  export default {
    data() {
      return {
        label: '选择业务员',
        text: '黄日升',
      };
    },
    methods: {
      clear() {
        this.text = '';
      },
    },
  };
</script>
```

### Props

| 参数     | 说明         | 类型               | 默认值  |
| -------- | :----------- | ------------------ | ------- |
| show     | 是否展示     | _boolean_          | `false` |
| ismust   | 是否强调必录 | _boolean_          | `true`  |
| isclear  | 是否可以清空 | _boolean_          | `false` |
| disabled | 是否不可点击 | _boolean_          | `false` |
| label    | 左侧标题     | _string_           | `-`     |
| error    | 错误提示     | _string_           | `-`     |
| notext   | 没有显示内容 | _boolean_          | `false` |
| text     | 右侧显示内容 | _number \| string_ | `-`     |

### Events

| 事件名 |       说明       | 回调参数 |
| ------ | :--------------: | -------: |
| navto  | 触发点击跳转事件 |        - |
| clear  |   触发清除事件   |        - |
