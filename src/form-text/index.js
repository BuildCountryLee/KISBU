import { createNamespace } from '../utils/create';
import { props } from './props';

const [createComponent, bem] = createNamespace('formtext');

export default createComponent({
  props: {
    ...props
  },
  methods: {
    click(event) {
      this.$emit('clicktext', event);
    }
  },
  render() {
    if (this.show) {
      return (
        <div class={bem()}>
          <span class={['left', this.ismust ? 'must' : '']}>{this.label}</span>
          <span
            onClick={this.click}
            class={['right', this.isoverflow ? 'overflow' : '', this.isMain ? 'Main' : '',]}
            style={`color:${this.color}`}
          >{this.text}</span>
        </div >
      );
    }
  }
})


