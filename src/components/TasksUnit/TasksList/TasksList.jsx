import './TasksList.scss'

export default function TasksList(props) {
    return (
        <article>
            {/* {props.tasks.forEach(task => {
                <section>{task}</section>
            });} */}
            {props.tasks.map(task => (
                <section>{task}</section>
            ))}
        </article>
    )
}