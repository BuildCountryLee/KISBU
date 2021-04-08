# base-list 基础资料公共列表

### 引入

```js
import { kisBaseList } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-baselist
  ref="pageIndex"
  @loadMore="loadMore"
  @getmore="getmore"
  @select="select"
  @clickitem="clickitem"
  @enter="enter"
  @scan="scan"
  @add="add"
  @refresh="refresh"
  @refreshMenu="refreshMenu"
  :searchObj="searchObj"
  :menulist="menulist"
  :menuchooseID="menuchooseID"
  :list="list"
  :nodata="nodata"
  :end="end"
  :addbtn="addbtn"
  :type="type"
/>
```

### 使用插槽

```html
<kis-baselist>
  <template v-slot:wareTag="tag">
    <kis-tag class="ktag" width="" :ison="true" name="标签" />
  </template>
</kis-baselist>
```

## 详细数据说明

### searchObj

```js
searchObj = {
  type: 'input', // 搜索框类别，输入框类型或者点击类型
  text: '客户名称/代码/联系人', // 搜索框placeholder
  icon: 'scan', // 输入框后面面的小图标（scan、cancel）
  show: true, // 输入框是否有清除按钮
  keyword: '', // 搜索关键字
};
```

### menulist （参考客户分类）

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
    tagname: '标签', // 标签名称
  },
  { name: '太和电脑公司', left: '', right: '' },
  { name: '开心传媒', left: '广州市番禺区', right: '1325896869470' },
];
```

## API

### Props

| 参数         |       说明       |      类型 |  默认值 |
| ------------ | :--------------: | --------: | ------: |
| type         |     列表类型     |  _string_ |       - |
| addbtn       | 是否需要新增按钮 | _boolean_ | `false` |
| end          |   数据是否到底   | _boolean_ | `false` |
| nodata       |     暂无数据     | _boolean_ | `false` |
| searchObj    |    搜索栏参数    |  _Object_ |    `{}` |
| list         |     列表数据     |   _Array_ |    `[]` |
| menulist     |  侧边栏列表数据  |   _Array_ |    `[]` |
| menuchooseID | 侧边栏选中的 id  |  _Number_ |  `-999` |

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

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| wareTag | 首行右侧标签插槽 |
