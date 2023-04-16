import { useState } from "react";
import Button from "../../Util/Button/Button";
import "./PomodoroButtons.scss"

export default function PomodoroButtons(props) {
    const [showDisplayInfo, setShowDisplayInfo] = useState(false)
    const [info, setInfo] = useState("Dummy info")

    function displayInfo(source) {
        setShowDisplayInfo(true)
        if (source === "reset") {
            if (props.pomoStarted) {
                setInfo("Restart Pomo")
            } else if (!props.pomoStarted) {
                setInfo("Restart Break")
            }
        } else if (source === "start") {
            if (props.timerTicking) {
                setInfo("Pause Timer")
            } else {
                setInfo("Start Timer")
            }
        }
    }

    function undisplayInfo() {
        setShowDisplayInfo(false)
    }

    return (
        <div className="pomodoro-bttns-wrapper">
            <Button
                handleClick={props.resetTimer}
                primary={false}
                buttonSymbol="reset"
                displayInfo={displayInfo}
                undisplayInfo={undisplayInfo}
            />
            <Button
                handleClick={props.toggleTimer}
                timerTicking={props.timerTicking}
                primary={true}
                buttonSymbol="start"
                buttonSymbolTimerTicking="pause"
                displayInfo={displayInfo}
                undisplayInfo={undisplayInfo}
            />
            {showDisplayInfo && <aside>{info}</aside>}
        </div>
    )
}