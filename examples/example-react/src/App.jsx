import React from 'react'
import logo from './logo.svg'
import './App.css'

function Button() {
  return <button data-filant={undefined}>Without data attribute</button>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
