export const props = {
  // 是否显示整个类目
  show: {
    type: Boolean,
    default: true
  },
  // 是否强调必录
  ismust: Boolean,
  // 文字是否隐藏显示
  isoverflow: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  label: {
    type: String,
    default: '内容'
  },
  // 固定显示字符串
  disableText: String,
  // 错误提示
  error: String,
  // 显示最大字符长度
  maxSlice: {
    type: Number,
    default: 0
  },
  // 延迟时间
  time: {
    type: Number,
    default: 300
  },
  // 输入框内数据
  text: [Number, String]
} 