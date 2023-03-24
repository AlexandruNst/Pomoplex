export default function TimerConfig(props) {
    return (
        <>
            <div>Timer Config {props.minutes}</div>
            <button onClick={props.decrementTimer}>less</button>
            <button onClick={props.incrementTimer}>more</button>
        </>
    )
}