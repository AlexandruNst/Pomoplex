import Task from '../Task/Task'
import './TasksList.scss'

export default function TasksList(props) {
    return (
        <article>
            {props.tasks.map((task, index) => (
                <Task
                    task={task}
                />
            ))}
        </article>
    )
}