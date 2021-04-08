import { createNamespace } from '../utils/create';
const [createComponent, bem] = createNamespace('switch');

export default createComponent({
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event) {
      if (this.disabled) {
        return;
      }
      this.$emit('change', event);
    }
  },
  render() {
    return (
      <div
        class={[bem({ disabled: this.disabled }), this.value ? 'Main-bg' : '']}
        onClick={this.onClick}
      >
        <span></span>
      </div>
    );
  },
})


