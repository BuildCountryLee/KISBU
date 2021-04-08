# dialog 弹出框

### 引入

```js
import { kisDialog } from 'kisUI';
```

## 代码演示

### 基础用法

```html
<kis-dialog :message="弹窗内容" :config="config" />
<kis-dialog type="confirm" :config="config" />

<script>
  export default {
    data() {
      return {
        config: {
          confirm: { event: 'confirm', name: '确定' },
          cancel: { event: 'cancel', name: '取消' },
        },
      };
    },
  };
</script>
```

### Props

| 参数        | 说明           | 类型      | 默认值                                  |
| ----------- | :------------- | --------- | --------------------------------------- |
| show        | 是否展示       | _boolean_ | `false`                                 |
| showmask    | 是否使用遮罩层 | _boolean_ | `true`                                  |
| message     | 弹窗内容       | _string_  | `确认弹窗内容`                          |
| fontClass   | 文字显示位置   | _string_  | `center`                                |
| contentType | 弹窗内容类型   | _string_  | `normal` （normal 普通弹窗，slot 插槽） |
| type        | 弹窗类型       | _string_  | `alert`（alert，confirm 两种类型）      |
| config      | 按钮配置文件   | _Object_  | `如下`                                  |

```js
// config 按钮默认配置文件
config = {
  confirm: {
    // 必要，右侧按钮
    event: 'confirm', // 必要，传出的事件名
    name: '确定', // 必要，确定按钮显示文字
  },
  cancel: {
    // 必要，左侧按钮
    event: 'cancel', // 必要，传出的事件名
    name: '取消', // 必要，取消按钮显示文字
  },
};
```

### Events

| 事件名   |      说明      |                                     回调参数 |
| -------- | :------------: | -------------------------------------------: |
| hideMask | 点击遮罩层触发 |                                            - |
| confirm  |  点击确定按钮  | `(event,item)`当前事件名，当前按钮 item 数据 |
| cancel   |  点击取消按钮  |                                            - |

```js
//说明
//如果外部不传config配置，confirm，cancel为默认事件
//如果外部传入confi配置按钮，则返回的Events事件则是配置文件里面的event参数
```

### Slots

| 名称       | 说明           |
| ---------- | -------------- |
| dialogSlot | 弹出框内容插槽 |
