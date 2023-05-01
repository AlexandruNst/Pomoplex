import './Button.scss'

const symbolNames = {
    pause: "pause",
    start: "play_arrow",
    reset: "replay",
    tune: "tune"
}

export default function Button(props) {
    return (
        <button
            className={
                `bttn ${props.primary ?
                    "bttn-primary" :
                    "bttn-secondary"}`
            }
            onClick={props.handleClick}
            onMouseMove={() => props.displayInfo(props.buttonSymbol)}
            onMouseLeave={props.undisplayInfo}
        >
            <span className="material-symbols-outlined">
                {props.timerTicking ?
                    symbolNames[props.buttonSymbolTimerTicking] :
                    symbolNames[props.buttonSymbol]}
            </span>
        </button>
    )
}