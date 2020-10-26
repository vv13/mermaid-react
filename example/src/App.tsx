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
