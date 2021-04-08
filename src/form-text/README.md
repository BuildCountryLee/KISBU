# formtext 表单显示行

### 引入

```js
import { kisFormtext } from 'kisUI';
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

| 参数       | 说明             | 类型               | 默认值  |
| ---------- | ---------------- | ------------------ | ------- |
| show       | 是否展示组件     | _boolean_          | `true`  |
| ismust     | 是否强调必录     | _boolean_          | `false` |
| isoverflow | 文字是否隐藏显示 | _boolean_          | `true`  |
| isMain     | 文字是否隐藏显示 | _boolean_          | `false` |
| color      | text 显示颜色    | _string_           | -       |
| label      | 左侧标题栏       | _string_           | -       |
| text       | 右侧显示栏       | _number \| string_ | -       |
