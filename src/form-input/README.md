# forminput 表单输入行

### 引入

```js
import { kisForminput } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-formtext ismust="true" :label="label" text="我是测试" @clicktext="clicktext"/>
```

```js
export default {
   methods: {
    clicktext() {
      console.log('点击事件')
    },
};
```

## API

### Props

| 参数     |     说明     |    类型 | 默认值 |
| -------- | :----------: | ------: | -----: |
| show    | 是否显示 | boolean |  fasle |
| ismust    | 是否必录 | boolean |  fasle |
| label    | 左侧标题显示 | String |  内容 |
| placeholder |   placeholder   | String |  请输入内容 |
| text |   输入内容   | String |  无 |
| disableText |   固定显示字符串   | String |  无 |
| maxSlice |   显示最大字符长度   | Number |  0 |

### Events

| 事件名 |       说明       | 回调参数 |
| ------ | :--------------: | -------: |
| change | 输入框内字符改变触发 |   新输入的值    |