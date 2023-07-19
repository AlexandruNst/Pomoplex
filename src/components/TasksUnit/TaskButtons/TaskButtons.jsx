import "./TaskButtons.scss"

export default function TaskButtons(props) {
    return (
        <div className="task-buttons">
            <span id="task-done-button" class="material-symbols-outlined" onClick={() => props.toggleTaskDone(props.taskIndex)}>
                done
            </span>
            <span class="material-symbols-outlined" onClick={() => props.deleteTask(props.taskIndex)}>
                delete
            </span>
        </div>
    )
}