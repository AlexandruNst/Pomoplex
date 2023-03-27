import { useState, useEffect } from 'react'
import './App.scss'
import { Pomodoro, Tasks } from './components'

function App() {

  return (
    <>
      <Pomodoro />
      <h1>Tasks below</h1>
      <Tasks />
    </>
  )
}

export default App
