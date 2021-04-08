# baseDetail 基础资料列表详情

### 引入

```js
import { kisBaseDetail } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<base-detail
  :nohead="true"
  :showbtn="true"
  :baselist="baselist"
  :tabparam="tabparam"
  :buttonlist="buttonlist"
  @toSet="toSet"
  @clickbtn="clickbtn"
/>
```

## API

### Props

| 参数       |       说明       |      类型 |  默认值 |
| ---------- | :--------------: | --------: | ------: |
| nohead     |  是否有头部 tab  | _boolean_ | `false` |
| tabparam   |      单据头      | _boolean_ | `false` |
| showbtn    |  底部是否有按钮  |  _object_ |  `见下` |
| baselist   | 基本信息页面数据 |   _Array_ |    `[]` |
| buttonlist |   底部按钮列表   |   _Array_ |    `[]` |

## 详细数据说明

### tabparam （默认值）

```js
// 头部tab
tabparam = {
   hasclick: false, // 是否有设置按钮
   tabsItem: [{ name: '基本信息', id: '0' }  ];
}
```

### buttonlist

```js
buttonlist = [
    {
      class: '', // 类名
      show: true, // 按钮是否显示
      text: '删除', // 显示文字
      name: 'delete', // 回调用来区分按钮的name
      event: 'deleteCustomer' // 回调用的事件名
    },
    {
      class: 'Main-bg',
      show: true,
      text: '编辑',
      name: 'edit',
      event: 'edit'
    }
  ],
```

### baselist

```js
// 头部tab
baselist = [
  {
    type: 'notitle', // notitle,more,up
    list: [
      { label: '名称：', text: '测试客户' },
      {
        label: '联系人电话',
        text: '13025487994',
        type: 'phone',
        isMain: true,
      },
    ],
  },
  {
    title: '往来应收',
    type: 'more',
    list: [
      {
        label: '信用额度',
        text: '1,000',
      },
    ],
  },
];
```

### Events

| 事件名      |          说明          |                       回调参数 |
| ----------- | :--------------------: | -----------------------------: |
| clickbtn    |    点击底部按钮触发    |     _item: object(当前行数据)_ |
| changeTab   |   点击头部 tab 触发    | _value: string(当前 tab 索引)_ |
| toSet       |    点击设置按钮触发    |                              - |
