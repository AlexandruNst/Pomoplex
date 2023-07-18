import { useState } from 'react'
import TasksList from '../TasksList/TasksList'
import './Tasks.scss'

export default function Tasks() {

    const [tasks, setTasks] = new useState(["Task a", "Task b"])

    return (
        <div className="tasks">
            <h2 className="title">Tasks</h2>
            <TasksList
                tasks={tasks}
            />
        </div>
    )
}