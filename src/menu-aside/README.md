# menu-aside 左侧面板菜单树

### 引入

```js
import { kisMenuAside } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-menu-aside :menulist="menulist" :menuchooseID="1" />
```

## 详细数据说明

### menulist

```js
// list 菜单树结构
menulist = [
  {
    choose: false, // 当前是否被选中
    root: true, // 是否根节点
    itemID: -1, //必要， 客户id
    name: '全部客户（12）', //必要， 名称
    hasNumber: true, // 非必要，是否展示代码，该选项为true，number为比传
    number: null, // 非必要，代码
    isLastLevel: 1, // 必要，是否是最后一级
    itemlist: [], // 非必要，子节点数据
  },
  {
    choose: false, // 当前是否被选中
    root: true, // 是否根节点
    itemID: 308, // 客户id
    name: '华南地区客户（5）', // 名称
    number: 001, // 代码
    isLastLevel: 1, // 是否是最后一级
    itemlist: [
      // 子节点数据
      {
        choose: true,
        root: false,
        itemID: 371,
        name: '深圳客户（5）',
        number: '001.1',
        itemlist: [
          {
            choose: true,
            choose: false,
            itemID: 405,
            name: '金蝶软件',
            number: '001.1.1',
            itemlist: [],
            isLastLevel: 1,
          },
        ],
        isLastLevel: 0,
      },
    ],
  },
];
```

### Props

| 参数         | 说明                     | 类型      | 默认值  |
| ------------ | :----------------------- | --------- | ------- |
| show         | 是否展开左侧菜单面板     | _boolean_ | `false` |
| list         | 菜单树数据               | _array_   | `[]`    |
| menuchooseID | 横向菜单选中 id          | _number_  | `-999`  |
| chooseParent | 分类别表是否可以点击父类 | _boolean_ | `true`  |

### Events

| 事件名    |       说明       |                 回调参数 |
| --------- | :--------------: | -----------------------: |
| clickmenu |   点击分裂图标   |                        - |
| getmore   | 点击下拉展开图标 | *item*当前分录 item 数据 |
| select    | 触发选择菜单事件 | *item*当前分录 item 数据 |
| refresh   |  下拉刷新菜单树  |                        - |
