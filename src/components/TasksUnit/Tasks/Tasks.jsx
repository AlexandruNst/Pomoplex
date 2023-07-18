import { useState } from 'react'
import TasksList from '../TasksList/TasksList'
import './Tasks.scss'
import NewTask from '../NewTask/NewTask';
import Button from '../../Util/Button/Button'

export default function Tasks() {

    const [tasks, setTasks] = useState(["Task a", "Task b"])
    const [showNewTask, setShowNewTask] = useState(true);

    function toggleNewTask() {
        setShowNewTask(oldShowNewTask => !oldShowNewTask)
    }

    return (
        <div className="tasks">
            <h2 className="title">Tasks</h2>
            <Button
                handleClick={toggleNewTask}
                primary={true}
                alternative={showNewTask}
                buttonSymbol={"add"}
                buttonSymbolAlternative={"close"}
            />
            {showNewTask && <NewTask />}
            <TasksList
                tasks={tasks}
            />
        </div>
    )
}