export const serachProps = {
  label: String,
  keyword: String,
  shape: {
    type: String,
    default: 'square'
  },
  background: String,
  maxlength: [Number, String],
  placeholder: String,
  clearable: Boolean,
  autofocus: Boolean,
  showAction: Boolean,
  actionText: {
    type: String,
    default: '取消'
  },
  disabled: Boolean,
  readonly: Boolean,
  error: Boolean,
  inputAlign: {
    type: String,
    default: 'left'
  },
  leftIcon: {
    type: String,
    default: 'search',
  },
  rightIcon: String
}