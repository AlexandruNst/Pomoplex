import { useState, useEffect } from 'react'
import { Pomodoro, Tasks, Music } from './components'
import './App.scss'

function App() {

  return (
    <>
      <main className="app-wrapper">
        <article className="pomo-tasks">
          <div className="glass-card pomo-tasks-card">
            <div className="card-border"></div>
            <div className="card-bg"></div>
            <div className="card-glass"></div>
            <div className="card-gradient"></div>
            <Pomodoro />
            <Tasks />
          </div>
        </article>
        <aside className="music">
          <div className="glass-card music-card">
            <div className="card-border"></div>
            <div className="card-bg"></div>
            <div className="card-glass"></div>
            <div className="card-gradient"></div>
            <Music />
          </div>
        </aside>
      </main>
    </>
  )
}

export default App
