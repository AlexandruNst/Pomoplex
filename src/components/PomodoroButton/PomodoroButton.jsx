export default function PomodoroButton(props) {
    return (
        <button onClick={props.toggleTimer}>{props.timerTicking ? "Pause" : "Start"}</button>
    )
}