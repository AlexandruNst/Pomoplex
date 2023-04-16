import "./PomodoroInfo.scss"

export default function PomodoroInfo(props) {
    return (
        <div className="pomodoro-info">
            <h3 className="title">
                {props.inPomo ? "Focus" : "Break"}
            </h3>
            <p className="info">Completed Pomos: {props.completedPomos}</p>
        </div>
    )
}