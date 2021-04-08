# searchbar 搜索展示框

### 引入

```js
import { kisSearchbar } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-searchbar
  :conText="conText"
  :isscan="isscan"
  @focused="focused"
  @scan="scan"
/>
```

```js
export default {
  data() {
    return {
      conText: '请输入商品名称/条码...',
      isscan: true,
    };
  },
  methods: {
    focused() {
      this.$emit('focused');
    },
    scan() {
      this.$emit('scan');
    },
  },
};
```

## API

### Props

| 参数    |         说明         |    类型 |                   默认值 |
| ------- | :------------------: | ------: | -----------------------: |
| conText | 输入框内显示的提示语 |  string | `请输入商品名称/条码...` |
| isscan  |   是否启用扫码功能   | boolean |                  `fasle` |

### Events

| 事件名  |     说明     | 回调参数 |
| ------- | :----------: | -------: |
| focused |  点击输入框  |        - |
| scan    | 点击扫码按钮 |        - |
