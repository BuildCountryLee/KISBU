import { createNamespace } from '../utils/create';
const [createComponent, bem] = createNamespace('noData');

export default createComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ImgClass: {
      type: String,
      default: 'Seven'
    },
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick(event) {
      if (this.disabled) {
        return;
      }
      this.$emit('change', event);
    },
    getSlot() {
      const Slot = this.slots('other');
      if (Slot) {
        return Slot;
      }
    }
  },
  render() {
    return (
      <div class={bem()} v-show="show"
      >
        <div class="content">
          <span class={[ImgClass, 'img']}></span>
          <p class="message">{message}</p>
          {this.getSlot()}
        </div>
      </div >
    );
  },
})


