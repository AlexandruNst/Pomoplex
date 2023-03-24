import { useEffect, useState } from 'react'
import './Pomodoro.scss'

export default function Pomodoro(props) {
    const [timer, setTimer] = useState("00:00")
    // const [minutes, setMinutes] = useState(5)
    // const [timerTicking, setTimerTicking] = useState(true)

    // function toggleTimer() {
    //     setTimerTicking(oldTimerTicking => !oldTimerTicking)
    //     if (props.minutes === 0) props.setMinutes(5)
    // }

    // useEffect(() => {
    //     setTimer(`updated ${props.minutes}`)
    //     if (props.minutes === 0) setTimerTicking(false)
    // }, [props.minutes])

    // useEffect(() => {
    //     if (timerTicking) {
    //         const timerInterval = setInterval(() => {
    //             props.setMinutes(oldMinutes => oldMinutes - 1)
    //         }, 1000)
    //         return () => clearInterval(timerInterval)
    //     }
    // }, [timerTicking])

    useEffect(() => {
        setTimer(`updated ${props.minutes}`)
        // if (props.minutes === 0) props.toggleTimer()
    }, [props.minutes])


    return (
        <div className="pomodoro">
            <h2 className="pomodoro--title">{timer}</h2>

        </div>
    )
}