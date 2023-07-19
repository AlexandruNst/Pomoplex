import './Button.scss'

const symbolNames = {
    pause: "pause",
    start: "play_arrow",
    reset: "replay",
    tune: "tune",
    add: "add",
    close: "close"
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
            onMouseMove={props.displayInfo}
            onMouseLeave={props.undisplayInfo}
        >
            <span className="material-symbols-outlined">
                {props.alternative ?
                    symbolNames[props.buttonSymbolAlternative] :
                    symbolNames[props.buttonSymbol]}
            </span>
        </button>
    )
}