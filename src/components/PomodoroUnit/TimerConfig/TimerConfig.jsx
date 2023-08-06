import "./TimerConfig.scss"


export default function TimerConfig(props) {

    return (
        <div className="timer-config">
            <div>
                <p>Timer Config</p>
                <p>(minutes)</p>
            </div>
            <div>
                <p>Pomo Time</p>
                <p className="timer-line">
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("pomo", -5)}>keyboard_double_arrow_left</span>
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("pomo", -1)}>keyboard_arrow_left</span>
                    <span className="timer-config-time">{props.minutes}</span>
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("pomo", 1)}>keyboard_arrow_right</span>
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("pomo", 5)}>keyboard_double_arrow_right</span>
                </p>
            </div>
            <div>
                <p>Break Time</p>
                <p className="timer-line">
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("break", -5)}>keyboard_double_arrow_left</span>
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("break", -1)}>keyboard_arrow_left</span>
                    <span className="timer-config-time">{props.break}</span>
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("break", 1)}> keyboard_arrow_right</span>
                    <span className="material-symbols-outlined" onClick={() => props.changeTimer("break", 5)}>keyboard_double_arrow_right</span>
                </p>
            </div>
        </div>
    )
}