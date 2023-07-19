import "./TasksInfo.scss"

export default function TasksInfo(props) {
    return (
        <div className="tasks-info">
            <aside>
                <span className="tasks-info-opacity">{`Completed Tasks: ${props.completedTasks}/${props.totalTasks}`}</span>
                <span id="party-emoji"></span>{props.totalTasks === props.completedTasks ? " 🎉" : ""}<span />
            </aside>
            {props.showTaskButtonInfo && <aside><span className="tasks-info-opacity">{props.taskButtonInfo}</span></aside>}
        </div>
    )
}