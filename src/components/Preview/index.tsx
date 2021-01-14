import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Preview',
  props: {
    code: {
      type: String
    }
  },
  setup(props, ctx) {
    const frameRef = ref()
    return () => (
      <div class="render-preview">
        <iframe ref={frameRef} />
      </div>
    )
  }
})
