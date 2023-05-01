import "./TimerConfig.scss"

export default function TimerConfig(props) {
    return (
        <div className="timer-config">
            <div>
                <p>Timer Config</p>
                <p>(minutes)</p>
                {/* Timer Config {props.minutes} */}
            </div>
            <div>
                <p>Pomo Time</p>
                <p className="timer-line">
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("pomo", "decrease", "large")}>keyboard_double_arrow_left</span>
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("pomo", "decrease", "small")}>keyboard_arrow_left</span>
                    <span className="timer-config-time">{props.minutes}</span>
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("pomo", "increase", "small")}>keyboard_arrow_right</span>
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("pomo", "increase", "large")}>keyboard_double_arrow_right</span>
                </p>
            </div>
            <div>
                <p>Break Time</p>
                <p className="timer-line">
                    <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
                    <span className="material-symbols-outlined">keyboard_arrow_left</span>
                    <span className="timer-config-time">5</span>
                    <span className="material-symbols-outlined"> keyboard_arrow_right</span>
                    <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
                </p>
            </div>
            {/* <button onClick={props.decrementTimer}>less</button>
            <button onClick={props.incrementTimer}>more</button> */}
        </div>
    )
}