# scroll-list 滚动列表

### 引入

```js
import { kisScrollList } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-scroll-list ref="scrollList" :finished="finished" :finishText="finishtext">
  <section v-for="(item,index) in list" :key="index">
    {{item.name}}
  </section>
</kis-scroll-list>

<script>
  export default {
    data() {
      return {
        finishText: '没有更多了',
        finished: true,
        list: [
          { name: '测试客户1' },
          { name: '历史客户' },
          { name: '金蝶软件' },
        ],
      };
    },
  };
</script>
```

### Props

| 参数        | 说明                                           | 类型    | 默认值                   |
| ----------- | :--------------------------------------------- | ------- | ------------------------ |
| immediate   | 是否初始化触发一次 load 事件                   | _boolean_ | `false`                  |
| disabled    | 禁用下拉刷新                                   | _boolean_ | `false`                  |
| finished    | 是否已加载完成（加载完成后不再触发 load 事件） | _boolean_ | `false`                  |
| error       | 是否加载失败，加载失败后点击错误提示           | _boolean_ | `false`                  |
| loadingText | 加载过程中的提示文案                           | _string_  | -                        |
| finishText  | 加载完成后的提示文案                           | _string_  | `没有更多了`             |
| errorText   | 加载失败后的提示文案                           | _string_  | `请求失败，点击重新加载` |
| offset      | 滚动条与底部距离(小于 offset 时触发 load 事件) | _number_  | `10`                     |

### Events

| 事件名 |       说明       |                   回调参数 |
| ------ | :--------------: | -------------------------: |
| click  | 触发点击标签事件 | _item: object(当前行数据)_ |
| delete |   触发删除事件   |                          - |
