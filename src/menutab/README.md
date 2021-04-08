# menutab 头部菜单tab切换

### 引入

```js
import { kisMenutab } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-menutab :tabsItem="tabsItem" :tabindex="0" />
<kis-menutab :tabsItem="tabsItem" :tabindex="0" :allcolor="true" />

<script>
  export default {
    data() {
      return {
        tabsItem: [
          { name: '客户', id: '0' },
          { name: '供应商', id: '1' },
        ],
      };
    },
  };
</script>
```

### Props

| 参数     | 说明                   | 类型      | 默认值  |
| -------- | :--------------------- | --------- | ------- |
| show     | 是否显示               | _boolean_ | `true`  |
| tabindex | 由外部传入当前显示项   | _string_  | `0`     |
| allcolor | tab 下划线是否全部展示 | _boolean_ | `false` |
| tabsItem | tab 菜单栏数据         | _array_   | `如下`  |

```js
tabsItem = [
  {
    name: '客户', // tab显示文字
    id: '0', // id标识
  },
  {
    name: '供应商',
    id: '1',
  },
];
```

### Events

| 事件名 |      说明       |            回调参数 |
| ------ | :-------------: | ------------------: |
| change | 切换 tab 栏触发 | _id_,当前 tab 的 id |
