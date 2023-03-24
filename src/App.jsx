import { useState, useEffect } from 'react'
import './App.scss'
import { Pomodoro, Tasks, TimerConfig, PomodoroButton } from './components'

function App() {

  const [config, setConfig] = useState({
    pomoTime: 7,
    shortBreak: 10,
    longBreak: 20
  })

  const [minutes, setMinutes] = useState(5)
  const [timerTicking, setTimerTicking] = useState(true)

  function toggleTimer() {
    if (minutes <= 0) setMinutes(config.pomoTime)
    setTimerTicking(oldTimerTicking => !oldTimerTicking)
    // if (minutes === 0) setMinutes(5)
  }

  useEffect(() => {
    if (minutes <= 0) setTimerTicking(false)
  }, [minutes])

  useEffect(() => {
    if (timerTicking) {
      const timerInterval = setInterval(() => {
        setMinutes(oldMinutes => oldMinutes - 1)
      }, 1000)
      return () => clearInterval(timerInterval)
    }
  }, [timerTicking])


  function incrementTimer() {
    // setMinutes(oldMinutes => oldMinutes + 1)
    setConfig(oldConfig => ({
      ...oldConfig,
      pomoTime: oldConfig.pomoTime + 1
    }))
  }

  function decrementTimer() {
    // setMinutes(oldMinutes => oldMinutes > 1 ? oldMinutes - 1 : 1)
    setConfig(oldConfig => ({
      ...oldConfig,
      pomoTime: oldConfig.pomoTime > 1 ? oldConfig.pomoTime - 1 : 1
    }))
  }

  return (
    <main>
      <h1>Pomodoro</h1>
      <Pomodoro
        minutes={minutes}
        toggleTimer={toggleTimer}
      />
      <PomodoroButton
        toggleTimer={toggleTimer}
        timerTicking={timerTicking}
      />
      <TimerConfig
        minutes={config.pomoTime}
        incrementTimer={incrementTimer}
        decrementTimer={decrementTimer}
      />
    </main>
  )
}

export default App
