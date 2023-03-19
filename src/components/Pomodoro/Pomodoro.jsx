import { useEffect, useState } from 'react'
import './Pomodoro.scss'

export default function Pomodoro() {
    const [timer, setTimer] = useState("00:00")
    const [minutes, setMinutes] = useState(5)
    const [timerTicking, setTimerTicking] = useState(true)

    function toggleTimer() {
        setTimerTicking(oldTimerTicking => !oldTimerTicking)
        if (minutes === 0) setMinutes(5)
    }

    useEffect(() => {
        setTimer(`updated ${minutes}`)
        if (minutes === 0) setTimerTicking(false)
    }, [minutes])

    useEffect(() => {
        if (timerTicking) {
            const timerInterval = setInterval(() => {
                setMinutes(oldMinutes => oldMinutes - 1)
            }, 1000)
            return () => clearInterval(timerInterval)
        }
    }, [timerTicking])


    return (
        <div className="pomodoro">
            <h2 className="pomodoro--title">{timer}</h2>
            <button onClick={toggleTimer}>{timerTicking ? "Pause" : "Start"}</button>
        </div>
    )
}