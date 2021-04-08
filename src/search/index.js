import { createNamespace } from '../utils/create';
import { serachProps } from './props'
import Field from '../field'
import { isDef } from '../utils';

const [createComponent, bem] = createNamespace('search');

export default createComponent({
  props: {
    ...serachProps
  },
  methods: {
    onClear(event) {
      this.$emit('clear', event)
    },
    onInput(event) {
      this.$emit('input', event)
    },
    onBlur(event) {
      this.$emit('blur', event)
    },
    onFocus(event) {
      this.$emit('focus', event)
    },
    onCancel(event) {
      this.$emit('cancel', event)
    },
    onKeypress(event) {
      if (event.keyCode === 13) {
        // 阻止默认事件
        event.preventDefault();
        this.$emit('search', event.target.value)
      }
      this.$emit('keypress', event)
    },
    getLabel() {
      const labelSlot = this.slots('label');
      const label = this.slots('label') || isDef(this.label);
      if (label) {
        return (
          <div class={bem('label')}>
            {labelSlot ? labelSlot : this.label}
          </div>
        );
      }
    },
    getAction() {
      // 必须先设置showAction
      if (!this.showAction) return;
      const cancelSlots = this.slots('action')
      return (
        <div class={bem('action')} role="button" tabindex="0" onClick={this.onCancel}>
          {cancelSlots ? cancelSlots : this.actionText}
        </div>
      );
    },
    getLeftIcon() {
      const leftSlot = this.slots('left-icon');
      if (leftSlot) return  leftSlot;
    },
    getRightIcon() {
      const rightSlot = this.slots('right-icon');
      if (rightSlot) return  rightSlot;
    }
  },
  render() {
    const scopedSlot = {
      'left-icon': this.getLeftIcon,
      'right-icon': this.getRightIcon
    }
    return (
      <div
        class={bem({ 'show-action': this.showAction })}
        style={{ background: this.background }}
      >
        <div class={bem('content', this.shape)}>
          {this.getLabel()}
          <Field
            type="search"
            border={false}
            placeholder={this.placeholder}
            clearable={this.clearable}
            value={this.keyword}
            disabled={this.disabled}
            inputAlign={this.inputAlign}
            leftIcon={this.leftIcon}
            rightIcon={this.rightIcon}
            scopedSlots={scopedSlot}
            onClear={this.onClear}
            onBlur={this.onBlur}
            onInput={this.onInput}
            onFocus={this.onFocus}
            onKeypress={this.onKeypress}
          />
        </div>
        {this.getAction()}
      </div>
    )
  }
})

