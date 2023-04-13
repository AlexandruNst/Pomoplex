import PomodoroButton from "../PomodoroButton/PomodoroButton";

export default function PomodoroButtons(props) {
    return (
        <>
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
        </>
    )
}