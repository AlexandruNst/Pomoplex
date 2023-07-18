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

    function addNewTask(task) {
        setTasks(oldTasks => [...oldTasks, task])
    }

    return (
        <div className="tasks">
            <section className="tasks-title-section">
                <h2 className="title">Tasks</h2>
                <Button className="tasks-button"
                    handleClick={toggleNewTask}
                    primary={true}
                    alternative={showNewTask}
                    buttonSymbol={"add"}
                    buttonSymbolAlternative={"close"}
                />
            </section>
            {showNewTask && <NewTask addNewTask={addNewTask} />}
            <TasksList
                tasks={tasks}
            />
        </div>
    )
}