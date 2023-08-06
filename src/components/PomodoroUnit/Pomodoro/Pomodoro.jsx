import PomodoroTimer from "../PomodoroTimer/PomodoroTimer"
import TimerConfig from "../TimerConfig/TimerConfig"
import { useEffect, useState } from 'react'
import './Pomodoro.scss'
import PomodoroButtons from "../PomodoroButtons/PomodoroButtons"
import PomodoroInfo from "../PomodoroInfo/PomodoroInfo"

export default function Pomodoro() {
    const [config, setConfig] = useState({
        pomoTime: 25,
        breakTime: 5
    })
    const [seconds, setSeconds] = useState(1500)
    const [timerTicking, setTimerTicking] = useState(false)
    const [inPomo, setInPomo] = useState(true)
    const [pomoStarted, setPomoStarted] = useState(true)
    const [completedPomos, setCompletedPomos] = useState(0)
    const [showConfig, setShowConfig] = useState(false)

    function toggleShowConfig() {
        setShowConfig(oldShowConfig => !oldShowConfig)
    }

    function toggleTimer() {
        if (inPomo && !pomoStarted) setPomoStarted(true)
        else if (!inPomo && pomoStarted) setPomoStarted(false)
        setTimerTicking(oldTimerTicking => !oldTimerTicking)
    }

    function resetTimer() {
        if (pomoStarted) {
            setSeconds(minutesToSeconds(config.pomoTime))
            setInPomo(true)
        } else {
            setSeconds(minutesToSeconds(config.breakTime))
            setInPomo(false)
        }
        setTimerTicking(false)
    }

    function minutesToSeconds(minutes) {
        return minutes * 60
    }

    function changeTimer(source, quantity) {
        const timeToChange = (source === "pomo" ? config.pomoTime : config.breakTime) + quantity
        const newTime = timeToChange > 1 ? timeToChange : 1
        setConfig(oldConfig =>
            source === "pomo" ?
                ({ ...oldConfig, pomoTime: newTime })
                :
                ({ ...oldConfig, breakTime: newTime })
        )
        if (source === "pomo" && !timerTicking && inPomo) setSeconds(minutesToSeconds(newTime))
        if (source === "break" && !timerTicking && !inPomo) setSeconds(minutesToSeconds(newTime))
    }

    useEffect(() => {
        if (seconds <= 0) {
            setTimerTicking(false)
            if (inPomo) {
                setSeconds(minutesToSeconds(config.breakTime))
                setCompletedPomos(oldCompletedPomos => oldCompletedPomos + 1)
            } else
                setSeconds(minutesToSeconds(config.pomoTime))
            setInPomo(oldInPomo => !oldInPomo)
        }
    }, [seconds])

    useEffect(() => {
        if (timerTicking) {
            const timerInterval = setInterval(() => {
                setSeconds(oldSeconds => oldSeconds - 1)
            }, 1000)
            return () => clearInterval(timerInterval)
        }
    }, [timerTicking])

    return (
        <section className="pomodoro-section">
            <PomodoroTimer
                seconds={seconds}
                toggleTimer={toggleTimer}
            />
            <div className="pomodoro-utils">
                <PomodoroInfo
                    inPomo={inPomo}
                    completedPomos={completedPomos}
                />
                <PomodoroButtons
                    toggleTimer={toggleTimer}
                    resetTimer={resetTimer}
                    toggleShowConfig={toggleShowConfig}
                    timerTicking={timerTicking}
                    inPomo={inPomo}
                    pomoStarted={pomoStarted}
                    showConfig={showConfig}
                />
            </div>

            {showConfig &&
                <TimerConfig
                    minutes={config.pomoTime}
                    break={config.breakTime}
                    changeTimer={changeTimer}
                />
            }
            <hr />
        </section>
    )
}