import { useState } from 'react'
import TasksList from '../TasksList/TasksList'
import './Tasks.scss'
import NewTask from '../NewTask/NewTask';
import Button from '../../Util/Button/Button'

export default function Tasks() {

    const [tasks, setTasks] = useState([
        {
            text: "Task a",
            completed: false
        },
        {
            text: "Task b",
            completed: false
        }
    ])
    const [showNewTask, setShowNewTask] = useState(true);

    function toggleNewTask() {
        setShowNewTask(oldShowNewTask => !oldShowNewTask)
    }

    function addNewTask(task) {
        setTasks(oldTasks => [...oldTasks, { text: task, completed: false }])
    }

    function toggleTaskDone(taskIndex) {
        setTasks(oldTasks => oldTasks.map((task, index) => {
            if (index !== taskIndex) return task
            else {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
        }))
    }

    function deleteTask(taskIndex) {
        setTasks(oldTasks => oldTasks.filter((task, index) => index !== taskIndex))
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
                toggleTaskDone={toggleTaskDone}
                deleteTask={deleteTask}
            />
        </div>
    )
}