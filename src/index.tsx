import React, { useEffect, useState } from 'react'
import mermaid from 'mermaid'
import classnames from 'classnames'

interface Props {
  mmd: string
  id: string
  className?: string
  onRender?: (svg?: string) => void
  onClick?: () => void
}

function escape2Html(str: string) {
  const arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' }
  return str
    .replace(/&(lt|gt|nbsp|amp|quot);/gi, function (_, t) {
      return arrEntities[t]
    })
    .trim()
}

export default ({ mmd, id, className, onRender, onClick }: Props) => {
  const [svg, setSvg] = useState<string>('')
  useEffect(() => {
    mermaid.initialize({ startOnLoad: false })
  }, [])

  useEffect(() => {
    if (!mmd) return
    mermaid.mermaidAPI.render(id, escape2Html(mmd), (svg) => {
      setSvg(svg)
      if (onRender) {
        onRender(svg)
      }
    })
  }, [mmd])
  return (
    <div
      onClick={onClick}
      className={classnames('mermaid', className)}
      dangerouslySetInnerHTML={{ __html: svg }}
    ></div>
  )
}
