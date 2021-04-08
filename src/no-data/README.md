# Switch 开关

### 引入

```js
import { kisNodata } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-nodata :show="true" :message="" />
```

```js
export default {
  data() {
    return {
      message: '暂无数据',
    };
  },
};
```

## API

### Props

| 参数     | 说明                       | 类型    | 默认值  |
| -------- | :------------------------- | ------- | ------- |
| show     | 是否显示图标               | Boolean | `false` |
| ImgClass | 图标样式                   | String  | `Seven` |
| message  | 图标样式下方显示的文字说明 | String  | -       |

### ImgClass 说明

| 参数    | 适用说明           |
| ------- | :----------------- |
| One     | 客户或者用户列表   |
| Two     | 供应商列表         |
| Three   | 业务员或联系人列表 |
| Four    | sn 号列表          |
| Five    | 批号列表           |
| Six     | 商品列表           |
| Seven   | 单据列表           |
| Eight   | 仓库列表           |
| Nine    | 联系人地址列表     |
| Success | 成功               |
