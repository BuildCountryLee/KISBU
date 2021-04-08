# selector 条件筛选器

### 引入

```js
import { kisSelector } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-selector
  :datas="datas"
  :masktop="masktop"
  :moreConfig="moreConfig"
  :moreData="moreData"
/>

<script>
  export default {
    data() {
      return {
        masktop: '0px',
      };
    },
  };
</script>
```

## 详细数据说明

### datas （筛选条件显示）

```js
// 目前支持三种类型（radio单选，checkbox多选，more更多面板）
datas = [
  // 单选类型
  {
    label: '本日', // 必要，筛选栏显示名称
    name: 'date', // 非必要，组件外部用来区别操作
    type: 'radio', // 必要，下来选择类型
    isdefine: true, // 非必要，是否有自定义栏特定用于时间筛选
    option: [
      {
        name: '全部时间', // 必要，下拉单选条目
        value: 0, // 非必要，用于外部处理参数
        choose: false, // 必要，是否勾选
      },
      { name: '本日', value: 5, choose: true },
      { name: '本周', value: 1, choose: false },
      { name: '本月', value: 2, choose: false },
      { name: '本季', value: 3, choose: false },
      { name: '本年', value: 4, choose: false },
    ],
  },
  // 多选类型
  {
    label: '未审核', // 必要，筛选栏显示名称
    name: 'status', // 非必要，组件外部用来区别操作
    type: 'checkbox', // 必要，下来选择类型
    ismust: true, // 非必要，与msg配合使用
    msg: '请选择单据状态', // 非必要，没选类目时的警告提示ismust要传true
    option: [
      { name: '未审核', value: 1, choose: true },
      { name: '已审核', value: 2, choose: false },
    ],
  },
  {
    label: '筛选',
    name: 'more',
    type: 'more',
    option: [{ name: '全部状态', value: 0, choose: true }],
  },
];
```

### moreConfig （更多筛选条件配置）

```js
// 目前默认支持跳转类型，提供了一个插槽用来兼容其他类型
moreConfig = [
  {
    hide: false, // 非必要，是否隐藏当前条目
    label: '业务员', // 必要，条目左侧显示标题
    key: 'employee', // 必要，用来识别数据的关键值
    isclear: true, // 非必要,默认true，是否可以清除
    ismust: false, // 非必要,默认false，是否必选
    disabled: false, // 非必要,默认false，是否被禁用
    navto: function (item) {
      // 必要，触发跳转事件
      console.log('跳转选择业务员');
    },
    clear: function (item) {
      // 非必要，清除事件
      console.log('删除业务员');
    },
  },
];
```

### moreData （更多筛选面板显示的值）

```js
moreData = {
  employee: {
    // 必要，对应的config中的key值
    id: [], // 非必要，外部传参给父组件处理业务用
    value: '', // 必要，显示的值
  },
};
```

### Props

| 参数          | 说明                   | 类型      | 默认值  |
| ------------- | :--------------------- | --------- | ------- |
| datas         | 筛选条件数据           | _array_   | `[ ]`   |
| masktop       | 筛选组件距离顶部的距离 | _string_  | `132px` |
| moreConfig    | 更多筛选条件配置       | _array_   | `[ ]`   |
| clickMoreMask | 是否点击更多筛选遮罩层 | _boolean_ | `true`  |
| moreData      | 更多筛选条件选择的值   | _object_  | `{ }`   |
| time          | 自定义时间显示         | _string_  | `-`     |

### Events

| 事件名     |                    说明                    |                     回调参数 |
| ---------- | :----------------------------------------: | ---------------------------: |
| showOption |          点击筛选类目下拉图标触发          | _item: object(当前类目数据)_ |
| filter     |                触发筛选事件                |                            - |
| confirm    |        点击更多筛选面板中的确定按钮        |                            - |
| chooseDate |     点击自定义按钮（只存在单选按钮中）     |                            - |
| clear      |   清除当前筛选项数据（只存在更多面板中）   | _item: object(当前选项数据)_ |
| navto      | 触发当前筛选项跳转事件（只存在更多面板中） | _item: object(当前选项数据)_ |
| reset      |      点击重置按钮（只存在更多面板中）      |                            - |

### Slots

| 名称          | 说明                       |
| ------------- | -------------------------- |
| defineContent | 更多面板里面自定义样式插槽 |
