import { useEffect, useState } from 'react'
import TasksList from '../TasksList/TasksList'
import './Tasks.scss'
import NewTask from '../NewTask/NewTask';
import Button from '../../Util/Button/Button'
import TasksInfo from '../TasksInfo/TasksInfo';

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
    const [showNewTask, setShowNewTask] = useState(false)
    const [showTaskButtonInfo, setShowTaskButtonInfo] = useState(false)
    const [taskButtonInfo, setTaskButtonInfo] = useState("")

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

    function displayInfo() {
        setShowTaskButtonInfo(true)
    }

    function undisplayInfo() {
        setShowTaskButtonInfo(false)
    }

    useEffect(() => {
        if (!showNewTask) setTaskButtonInfo("Add New Task")
        else if (showNewTask) setTaskButtonInfo("Close New Task")
    }, [showNewTask])

    let totalTasks = tasks.length
    let completedTasks = tasks.reduce((acc, task) => task.completed ? acc + 1 : acc, 0)

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
                    displayInfo={displayInfo}
                    undisplayInfo={undisplayInfo}
                />
            </section>
            <TasksInfo
                totalTasks={totalTasks}
                completedTasks={completedTasks}
                showTaskButtonInfo={showTaskButtonInfo}
                taskButtonInfo={taskButtonInfo}
            />
            {showNewTask && <NewTask addNewTask={addNewTask} />}
            <TasksList
                tasks={tasks}
                toggleTaskDone={toggleTaskDone}
                deleteTask={deleteTask}
            />
        </div>
    )
}