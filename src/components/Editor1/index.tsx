import { defineComponent, onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'
import { editor } from 'monaco-editor'
import 'monaco-editor/esm/vs/editor/editor.api'
// import { loadStyle } from '../utils'
import './index.css'

const editorCDNPrefix = `https://cdn.staticfile.org/monaco-editor/0.21.2/min/vs/`

// function loadEditorScript(_modules: string | string[]) {
//   return Promise.all(
//     (_modules instanceof Array ? _modules : [_modules]).map(_module => {
//       return `${editorCDNPrefix}${_module}`
//     })
//   )
// }

// window.MonacoEnvironment = {
//   getWorkerUrl: function (moduleId, label) {
//     console.log(arguments)
//     if (moduleId === 'workerMain.js') {
//       return `${editorCDNPrefix}base/worker/workerMain.js`
//     }
//     return './editor.worker.js'
//   }
// }

export default defineComponent({
  name: 'Editor',
  props: {
    value: String
  },
  setup(props, ctx) {
    // onBeforeMount(() => {
    //   loadStyle(`${editorCDNPrefix}editor/editor.main.css`)
    //   loadEditorScript(['loader.min.js'])
    // })
    const editorRef = ref()
    let _editor: editor.IStandaloneCodeEditor
    onMounted(() => {
      _editor = editor.create(editorRef.value, {
        // fontSize: 16,
        // minimap: { enabled: false },
        language: 'javascript',
        // tabSize: 2,
        // theme: 'vs-dark',
        // value: props.value
        value: 'a+b=1'
      })
      _editor.onDidChangeModelContent(e => {
        ctx.emit('input', _editor.getValue())
      })
    })
    onBeforeUnmount(() => {
      _editor?.dispose()
    })
    return () => (
      <div ref={editorRef} class="code-editor">
        editor
      </div>
    )
  }
})
