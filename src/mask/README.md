# mask 遮罩层

### 引入

```js
import { kisMask } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-mask :showmask="showmask" :zindex="999" @hideMask="hideMask" />
```

```js
export default {
  data() {
    return {
      showmask: true,
    };
  },
  methods: {
    hideMask() {
      this.showmask = false;
    },
  },
};
```

## API

### Props

| 参数     |      说明      |    类型 |  默认值 |
| -------- | :------------: | ------: | ------: |
| showmask | 是否显示遮罩层 | Boolean | `false` |
| masktop  |   离顶部高度   |  string |   `0px` |
| aclass   |   自定义类名   |  String |       - |
| zindex   |  z-index 层级  |  Number |     `1` |

### Events

| 事件名   |    说明    | 回调参数 |
| -------- | :--------: | -------: |
| hideMask | 点击遮罩层 |       无 |
