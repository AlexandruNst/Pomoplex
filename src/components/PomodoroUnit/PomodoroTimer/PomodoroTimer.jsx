import { useEffect, useState } from 'react'
import './PomodoroTimer.scss'

export default function PomodoroTimer(props) {
    const [timer, setTimer] = useState("00:00")

    function generateTimer(timerSeconds) {
        const minutes = Math.floor(timerSeconds / 60)
        const seconds = timerSeconds % 60;
        const newTimer = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
        return newTimer
    }

    useEffect(() => {
        setTimer(`${generateTimer(props.seconds)}`)
    }, [props.seconds])


    return (
        <div className="pomodoro">
            <h2 className="pomodoro--timer">{timer}</h2>
        </div>
    )
}