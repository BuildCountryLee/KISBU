# searchtag 搜索输入标签

### 引入

```js
import { kisSearchtag } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-searchtag :list="list" :isdelete="true" @click="click" @delete="delete" />

<script>
  export default {
    data() {
      return {
        list: [
          { content: '测试客户1' },
          { content: '历史客户' },
          { content: '金蝶软件' },
        ],
      };
    },
    methods: {
      delete() {
        this.$emit('delete');
      },
      click() {
        this.$emit('click');
      },
    },
  };
</script>
```

### Props

| 参数     | 说明           | 类型    | 默认值     |
| -------- | :------------- | ------- | ---------- |
| show     | 是否展示       | boolean | `false`    |
| text     | 标题           | string  | `历史搜索` |
| list     | 标签列表       | Array   | `[]`       |
| isdelete | 是否有删除按钮 | boolean | `true`     |

### Events

| 事件名 |       说明       |                   回调参数 |
| ------ | :--------------: | -------------------------: |
| click  | 触发点击标签事件 | _item: object(当前行数据)_ |
| delete |   触发删除事件   |                          - |
