# searchinput 搜索输入框

### 引入

```js
import { kisSearchinput } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-searchinput
  :conText="conText"
  :isscan="isscan"
  @focused="focused"
  @scan="scan"
/>

<script>
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
</script>
```

### Props

| 参数        | 说明                     | 类型    | 默认值                                       |
| ----------- | :----------------------- | ------- | -------------------------------------------- |
| placeholder | 输入框内显示的提示语     | string  | `请输入搜索内容`                             |
| keyword     | 输入框搜索的关键字       | string  | -                                            |
| incontype   | 输入框右边展示的图标类型 | string  | -                                            |
| autofocus   | input 是否自动聚焦       | boolean | `fasle`                                      |
| btnObj      | 显示的按钮对象           | Object  | `{ show: true,text: '取消',event: 'cancel'}` |

### Events

| 事件名 |                  说明                  |                      回调参数 |
| ------ | :------------------------------------: | ----------------------------: |
| enter  |              触发输入事件              | _keyword: string(搜索关键字)_ |
| clear  |               清除搜索框               |                             - |
| scan   |              点击扫码图标              |                             - |
| -      | 自定义事件名：btnObj 传入的 event 参数 | _keyword: string(搜索关键字)_ |
