import { useEffect, useState } from "react";
import Button from "../../Util/Button/Button";
import "./PomodoroButtons.scss"

export default function PomodoroButtons(props) {
    const [showStartInfo, setShowStartInfo] = useState(false)
    const [showResetInfo, setShowResetInfo] = useState(false)
    const [showConfigInfo, setShowConfigInfo] = useState(false)
    const [startInfo, setStartInfo] = useState("")
    const [resetInfo, setResetInfo] = useState("")
    const [configInfo, setConfigInfo] = useState("")

    function displayStartInfo() {
        setShowStartInfo(true)
    }

    function undisplayStartInfo() {
        setShowStartInfo(false)
    }

    useEffect(() => {
        if (props.timerTicking) setStartInfo("Pause Timer")
        else setStartInfo("Start Timer")
    }, [props.timerTicking])

    function displayResetInfo() {
        setShowResetInfo(true)
    }

    function undisplayResetInfo() {
        setShowResetInfo(false)
    }

    useEffect(() => {
        if (props.pomoStarted) setResetInfo("Restart Pomo")
        else setResetInfo("Restart Break")
    }, [props.pomoStarted])

    function displayConfigInfo() {
        setShowConfigInfo(true)
    }

    function undisplayConfigInfo() {
        setShowConfigInfo(false)
    }

    useEffect(() => {
        if (props.showConfig) setConfigInfo("Close Config")
        else setConfigInfo("Config Timer")
    }, [props.showConfig])

    return (
        <div className="pomodoro-bttns-wrapper">
            <Button
                handleClick={props.toggleShowConfig}
                primary={false}
                buttonSymbol="tune"
                displayInfo={displayConfigInfo}
                undisplayInfo={undisplayConfigInfo}
            />
            <Button
                handleClick={props.resetTimer}
                primary={false}
                buttonSymbol="reset"
                displayInfo={displayResetInfo}
                undisplayInfo={undisplayResetInfo}
            />
            <Button
                handleClick={props.toggleTimer}
                alternative={props.timerTicking}
                primary={true}
                buttonSymbol="start"
                buttonSymbolAlternative="pause"
                displayInfo={displayStartInfo}
                undisplayInfo={undisplayStartInfo}
            />
            {showStartInfo && <aside>{startInfo}</aside>}
            {showResetInfo && <aside>{resetInfo}</aside>}
            {showConfigInfo && <aside>{configInfo}</aside>}
        </div>
    )
}