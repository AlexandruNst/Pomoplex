import { useState, useEffect } from 'react'
import { Pomodoro, Tasks } from './components'
import './App.scss'

function App() {

  return (
    <>
      <main className="app-wrapper">
        <article className="pomo-tasks">
          <div className="glass-card pomo-tasks-card">
            <Pomodoro />
            <Tasks />
          </div>
        </article>
        <aside className="music">
          <div className="glass-card music-card">
            Youtube wooo
          </div>
        </aside>
      </main>
    </>
  )
}

export default App
