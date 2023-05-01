import PomodoroTimer from "../PomodoroTimer/PomodoroTimer"
import TimerConfig from "../TimerConfig/TimerConfig"
import { useEffect, useState } from 'react'
import './Pomodoro.scss'
import PomodoroButtons from "../PomodoroButtons/PomodoroButtons"
import PomodoroInfo from "../PomodoroInfo/PomodoroInfo"

export default function Pomodoro() {
    const [config, setConfig] = useState({
        pomoTime: 0.15,
        breakTime: 0.1
    })
    const [seconds, setSeconds] = useState(5)
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
        <section>
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
                />
            </div>

            {showConfig &&
                <TimerConfig
                    minutes={config.pomoTime}
                    incrementTimer={incrementTimer}
                    decrementTimer={decrementTimer}
                />
            }
            <hr />
        </section>
    )
}