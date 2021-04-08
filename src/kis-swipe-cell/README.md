# swipe-cell 搜索展示框

### 引入

```js
import { kisSwipeCell } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-swipe-cell
  :disabled="disabled"
  :leftWidth="80"
  :rightWidth="80"
  @open="open"
  @close="close"
  ref="swipeCell"
>
  <div>客户<div>
  <div slot="right" @click.stop="toDelete()">删除</div>
</kis-swipe-cell>

<script>
export default {
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    open() {
      this.$emit('open');
    },
    close() {
      this.$emit('close');
    },
    toDelete() {
      this.$emit('toDelete');
    },
    closeCell() {
      this.$refs.swipeCell.closeCell();
    },
  },
};
</script>
```

## API

### Props

| 参数       |              说明               |     类型 |  默认值 |
| ---------- | :-----------------------------: | -------: | ------: |
| disabled   |        是否禁用滑动功能         |  _boolean_ | `fasle` |
| leftWidth  | 指定左侧滑动区域宽度，单位为 px | _number_ |     `0` |
| rightWidth | 指定右侧滑动区域宽度，单位为 px | _number_ |     `0` |

### Events

| 事件名 |       说明       | 回调参数 |
| ------ | :--------------: | -------: |
| open   | 打开单元格侧边栏 |        - |
| close  | 关闭单元格侧边栏 |        - |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法)

| 方法名    | 说明             | 参数 | 返回值 |
| --------- | ---------------- | ---- | ------ |
| closeCell | 收起单元格侧边栏 | -    | -      |

### Slots

| 名称  | 说明             |
| ----- | ---------------- |
| left  | 左侧滑动内容插槽 |
| right | 右侧滑动内容插槽 |
