# mermaid-react

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/mermaid-react.svg)](https://www.npmjs.com/package/mermaid-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mermaid-react
```

## Usage

```tsx
import React from 'react'
import MermaidReact from 'mermaid-react'

const t = `
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
`

const App = () => {
  return <MermaidReact id='test' mmd={t} onClick={() => console.log('test Click')} onRender={svg => console.log('render content', svg)} />
}

export default App

```

## License

MIT © [vv13](https://github.com/vv13)
