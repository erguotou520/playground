import { defineComponent, ref } from 'vue'
import Editor from './components/CodeEditor'
import Preview from './components/Preview'

export default defineComponent({
  name: 'App',
  setup() {
    const code = ref('use strict;')
    return () => (
      <div class="flex">
        <Editor class="flex-1" v-model={code} />
        <Preview class="flex-1" code={code.value} />
      </div>
    )
  }
})
