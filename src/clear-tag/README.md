# clear-tag 可删除标签

### 引入

```js
import { kisClearTag } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-clear-tag :name="name" :show="show" @clear="clear" />

<script>
  export default {
    data() {
      return {
        show: true,
        name: '业务员',
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

| 参数 | 说明     | 类型      | 默认值  |
| ---- | :------- | --------- | ------- |
| show | 是否展示 | _boolean_ | `false` |
| name | 显示名称 | _ string_ | `标签`  |

### Events

| 事件名 |     说明     | 回调参数 |
| ------ | :----------: | -------: |
| clear  | 触发删除事件 |        - |
