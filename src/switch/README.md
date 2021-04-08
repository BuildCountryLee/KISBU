# Switch 开关

### 引入

```js
import { kisSwitch } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-switch @change="change" :value="value" />
```

```js
export default {
  data() {
    return {
      value: true,
    };
  },
  methods: {
    change() {
      this.value = !this.value;
    },
  },
};
```

## API

### Props

| 参数     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| value    | 是否打开 | _boolean_ | `false` |
| disabled | 是否禁用 | _boolean_ | `false` |
