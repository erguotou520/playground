export async function loadScript(url: string, parent: HTMLElement = document.body) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.async = true
    script.onload = resolve
    script.onerror = reject
    parent.appendChild(script)
  })
}

export async function loadStyle(url: string, parent: HTMLElement = document.body) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    link.onload = resolve
    link.onerror = reject
    parent.appendChild(link)
  })
}
