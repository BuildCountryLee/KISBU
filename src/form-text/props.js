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
  // 是否显示主题色
  isMain: Boolean,
  // text显示颜色
  color: String,
  label: String,
  text: [Number, String]
} 