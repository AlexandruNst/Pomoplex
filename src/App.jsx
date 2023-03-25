import { useState, useEffect } from 'react'
import './App.scss'
import { Pomodoro, Tasks } from './components'

function App() {

  return (
    <>
      <Pomodoro />
      <Tasks />
    </>
  )
}

export default App
