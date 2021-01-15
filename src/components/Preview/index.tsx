import { defineComponent, onMounted, ref } from 'vue'
import { loadScript } from '../../utils'

export default defineComponent({
  name: 'Preview',
  props: {
    code: {
      type: String
    }
  },
  setup(props, ctx) {
    const frameRef = ref()

    onMounted(async () => {
      const frameDoc = (frameRef.value as HTMLIFrameElement).contentDocument
      if (frameDoc) {
        await loadScript('/vue/vue.global.prod.js', frameDoc.head)
        frameDoc.body.innerHTML = props.code ?? ''
      }
    })

    return () => (
      <div class="render-preview">
        <iframe ref={frameRef} />
      </div>
    )
  }
})
