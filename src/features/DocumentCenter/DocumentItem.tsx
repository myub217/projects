import React from 'react'

type Props = {
  name: string
  url: string
}

const DocumentItem: React.FC<Props> = ({ name, url }) => {
  return (
    <div className="doc-card">
      <div className="doc-title">{name}</div>
      <div className="doc-actions">
        <a href={url} download className="btn btn-primary btn-sm">
          Download
        </a>
      </div>
    </div>
  )
}

export default DocumentItem