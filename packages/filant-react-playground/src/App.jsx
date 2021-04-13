import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function Button(props) {
  return <button {...props}>Hola</button>
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
