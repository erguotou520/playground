import { defineComponent, ref } from 'vue'
import Editor from './components/CodeEditor'
import Preview from './components/Preview'
// import demoCode from './demo/simple.vue.txt'

const demoCode = `
<div id="list-rendering">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
<script>
const ListRendering = {
data() {
return {
  todos: [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
  ]
}
}
}

Vue.createApp(ListRendering).mount('#list-rendering')
</script>
`

export default defineComponent({
  name: 'App',
  setup() {
    const code = ref(demoCode)
    return () => (
      <div class="flex">
        <Editor class="flex-1" v-model={code} />
        <Preview class="flex-1" code={code.value} />
      </div>
    )
  }
})
