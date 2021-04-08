# customer 客户列表

### 引入

```js
import { kisCustomer } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-customer
  ref="scrollList"
  @loadMore="loadMore"
  @getmore="getmore"
  @refresh="refresh"
  @refreshMenu="refreshMenu"
  @select="select"
  @clickitem="clickitem"
  @enter="toSearch"
  @scan="scan"
  @add="add"
  :type="type"
  :searchObj="searchObj"
  :menulist="menuList"
  :menuchooseID="menuchooseID"
  :list="list"
  :end="end"
/>
```

## 详细数据说明

### searchObj

```js
searchObj = {
  text: '客户名称/代码/联系人', // 搜索框placeholder
  icon: 'scan', // 输入框里面的小图标
  show: true, // 是否显示输入框里面的小图标
};
```

### menulist

```js
menulist = [
  {
    choose: false, // 当前是否被选中
    root: true, // 是否根节点
    itemID: -1, // 客户id
    name: '全部客户（12）', // 名称
    number: null, // 代码
    isLastLevel: 1, // 是否是最后一级
    itemlist: [], // 子节点数据
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

### list

```js
list = [
  {
    name: '金蝶软件', // 客户名称
    left: '深圳市南山区金蝶软件园', // 客户联系地址
    right: '13026548974', // 客户联系电话
  },
  { name: '太和电脑公司', left: '', right: '' },
  { name: '开心传媒', left: '广州市番禺区', right: '1325896869470' },
];
```

## API

### Props

| 参数         |       说明       |      类型 |   默认值 |
| ------------ | :--------------: | --------: | -------: |
| type         |     列表类型     |  _string_ | `detail` |
| addbtn       | 是否需要新增按钮 | _boolean_ |   `true` |
| end          |   数据是否到底   | _boolean_ |  `false` |
| searchObj    |    搜索栏参数    |  _Object_ |     `{}` |
| list         |     列表数据     |   _Array_ |     `[]` |
| menulist     |  侧边栏列表数据  |   _Array_ |     `[]` |
| menuchooseID | 侧边栏选中的 id  |  _Number_ |      `0` |

### Events

| 事件名      |             说明             |                     回调参数 |
| ----------- | :--------------------------: | ---------------------------: |
| scan        |      点击搜索框扫码触发      |  _value: string(扫出的条码)_ |
| enter       | 点击搜索图标/键盘 enter 触发 |  _value: string(当前输入值)_ |
| add         |         点击新增触发         |                            - |
| clickitem   |        点击列表行触发        |   _item: object(当前行数据)_ |
| select      |    点击侧边栏选择分类触发    | _item: object(当前分类数据)_ |
| getmore     |    点击侧边栏下拉分类触发    | _item: object(当前分类数据)_ |
| loadMore    |     上拉列表加载更多触发     |   _item: object(当前行数据)_ |
| refresh     |       下拉列表刷新触发       |                            - |
| refreshMenu |    下拉侧边栏列表刷新触发    |                            - |

### 方法

通过 ref 可以获取到 List 实例并调用实例方法)

| 方法名      | 说明                         | 参数 | 返回值 |
| ----------- | ---------------------------- | ---- | ------ |
| stoploading | 加载完成后不再触发 load 事件 | -    | -      |

```

```
