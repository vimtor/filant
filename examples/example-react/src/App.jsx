import React from 'react'

function Button() {
  return <button data-filant={undefined}>Without Attribute</button>
}

function App() {
  return (
    <div>
      <Button />
      <p>
        A paragraph with <code>nested code</code>
      </p>
    </div>
  )
}

export default App
