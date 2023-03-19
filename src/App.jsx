import { useState, useEffect } from 'react'
import './App.scss'
import { Pomodoro, Tasks } from './components'

function App() {

  return (
    <main>
      <h1>Pomodoro</h1>
      <Pomodoro />
    </main>
  )
}

export default App
