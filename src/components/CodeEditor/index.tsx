import { defineComponent, onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'
// import 'monaco-editor/esm/vs/editor/editor.api'
import { editor } from 'monaco-editor'
import loader from './loader'
import './index.css'

export default defineComponent({
  name: 'Editor',
  props: {
    value: String
  },
  setup(props, ctx) {
    const editorRef = ref()

    let _editor: editor.IStandaloneCodeEditor
    onMounted(async () => {
      await loader.ensureMonacoIsLoaded()
      _editor = editor.create(editorRef.value, {
        fontSize: 16,
        minimap: { enabled: false },
        language: 'javascript',
        tabSize: 2,
        theme: 'vs-dark',
        // value: props.value
        value: 'a+b=1'
      })
      _editor.onDidChangeModelContent(e => {
        console.log('input', _editor.getValue())
        ctx.emit('input', _editor.getValue())
      })
    })
    onBeforeUnmount(() => {
      _editor?.dispose()
    })

    return () => <div ref={editorRef} class="code-editor"></div>
  }
})
