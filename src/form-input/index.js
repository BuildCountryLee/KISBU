import { createNamespace } from '../utils/create';
import { props } from './props'
const [createComponent, bem] = createNamespace('forminput');

export default createComponent({
  props: {
    ...props
  },
  methods: {
    onClick(event) {
      if (this.disabled) {
        return;
      }
      this.$emit('change', event);
    },
    getInput(event) {
      const inputProps = {
        ref: 'input',
        class: 'right',
        domProps: {
          value: this.value,
        },
        attrs: {
          ...this.$attrs,
          placeholder: this.placeholder,
        },
        on: this.listeners(),
        // add model directive to skip IME composition
        directives: [
          {
            name: 'model',
            value: this.value,
          },
        ],
      }
      return <input type={inputType} inputmode={inputMode} {...inputProps} />;
    },
    getError() {
      if (this.error.length) {

        return (
          <div class="form-error">
            <i class="iconcool gantanhao-mian"></i><span>{{ error }}</span>
          </div>
        )
      }
    },
    listeners() {
      const listeners = {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur,
      };
      return listeners;
    },
  },
  render() {
    if (this.show) {
      return (
        <section>
          <div class={bem()}>
            <span class={['left', this.ismust ? 'must' : '']}>{this.label}</span>
            {this.getInput()}
          </div>
          {this.getError()}
        </section >
      );
    }
  },
})


