interface Window {
  require?: ((_module: string[], callback: (value: unknown) => void) => void) & {
    config: (config: any) => void
  }
  // MonacoEnvironment?: monaco.Environment
  // monaco?: typeof monaco
}
