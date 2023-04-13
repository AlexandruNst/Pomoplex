import PomodoroTimer from "../PomodoroTimer/PomodoroTimer"
import TimerConfig from "../TimerConfig/TimerConfig"
import { useEffect, useState } from 'react'
import './Pomodoro.scss'
import PomodoroButtons from "../PomodoroButtons/PomodoroButtons"

export default function Pomodoro() {
    const [config, setConfig] = useState({
        pomoTime: 7,
        shortBreak: 10,
        longBreak: 20
    })
    const [seconds, setSeconds] = useState(5)
    const [timerTicking, setTimerTicking] = useState(false)

    function toggleTimer() {
        if (seconds <= 0) setSeconds(minutesToSeconds(config.pomoTime))
        setTimerTicking(oldTimerTicking => !oldTimerTicking)
    }

    function resetTimer() {
        setSeconds(minutesToSeconds(config.pomoTime))
        setTimerTicking(false)
    }

    function minutesToSeconds(minutes) {
        return minutes * 60
    }

    useEffect(() => {
        if (seconds <= 0) setTimerTicking(false)
    }, [seconds])

    useEffect(() => {
        if (timerTicking) {
            const timerInterval = setInterval(() => {
                setSeconds(oldMinutes => oldMinutes - 1)
            }, 1000)
            return () => clearInterval(timerInterval)
        }
    }, [timerTicking])


    function incrementTimer() {
        const newTime = config.pomoTime + 1
        setConfig(oldConfig => ({
            ...oldConfig,
            pomoTime: newTime
        }))
        !timerTicking && setSeconds(minutesToSeconds(newTime))
    }

    function decrementTimer() {
        const newTime = config.pomoTime > 1 ? config.pomoTime - 1 : 1
        setConfig(oldConfig => ({
            ...oldConfig,
            pomoTime: newTime
        }))
        !timerTicking && setSeconds(minutesToSeconds(newTime))
    }

    return (
        <section>
            <PomodoroTimer
                seconds={seconds}
                toggleTimer={toggleTimer}
            />
            <PomodoroButtons
                toggleTimer={toggleTimer}
                resetTimer={resetTimer}
                timerTicking={timerTicking}
            />
            <TimerConfig
                minutes={config.pomoTime}
                incrementTimer={incrementTimer}
                decrementTimer={decrementTimer}
            />
        </section>
    )
}