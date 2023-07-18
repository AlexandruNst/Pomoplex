import './TasksList.scss'

export default function TasksList(props) {
    return (
        <article>
            {props.tasks.map((task, index) => (
                <section key={index}>{task}</section>
            ))}
        </article>
    )
}