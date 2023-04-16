import { useState } from "react";
import Button from "../../Util/Button/Button";
import "./PomodoroButtons.scss"

export default function PomodoroButtons(props) {
    const [showDisplayInfo, setShowDisplayInfo] = useState(false)

    function displayInfo() {
        setShowDisplayInfo(true)
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
            {showDisplayInfo && <aside>Button info</aside>}
        </div>
    )
}