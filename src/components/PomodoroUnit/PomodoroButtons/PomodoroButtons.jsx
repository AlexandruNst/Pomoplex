import PomodoroButton from "../../Util/Button/Button";
import "./PomodoroButtons.scss"

export default function PomodoroButtons(props) {
    return (
        <div className="pomodoro-bttns-wrapper">
            <PomodoroButton
                handleClick={props.resetTimer}
                primary={false}
                buttonSymbol="reset"
            />
            <PomodoroButton
                handleClick={props.toggleTimer}
                timerTicking={props.timerTicking}
                primary={true}
                buttonSymbol="start"
                buttonSymbolTimerTicking="pause"
            />
        </div>
    )
}