import TaskButtons from "../TaskButtons/TaskButtons"
import "./Task.scss"

export default function Task(props) {
    return (
        <section className={`task ${props.task.completed ? "completed" : ""}`} >
            <div className="task-text">{props.task.text}</div>
            <TaskButtons
                toggleTaskDone={props.toggleTaskDone}
                taskIndex={props.taskIndex}
            />
        </section>
    )
}