import './PomodoroButton.scss'

const symbolNames = {
    pause: "pause",
    start: "play_arrow",
    reset: "replay"
}

export default function PomodoroButton(props) {
    return (
        <button onClick={props.handleClick}>
            <span class="material-symbols-outlined">
                {props.timerTicking ?
                    symbolNames[props.buttonSymbolTimerTicking] :
                    symbolNames[props.buttonSymbol]}
            </span>
        </button>
    )
}