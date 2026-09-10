import { useState } from 'react'
import TaskList from './TaskList'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === '') return

    const now = new Date()

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
      },
    ])

    setTask('')
  }

  const completeTask = (index) => {
    const updatedTasks = [...tasks]

    updatedTasks[index].completed =
      !updatedTasks[index].completed

    setTasks(updatedTasks)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">

        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          My Task Tracker
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 rounded border p-2"
          />

          <button
            onClick={addTask}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Add Task
          </button>
        </div>

        <TaskList
          tasks={tasks}
          onComplete={completeTask}
          onDelete={deleteTask}
        />

      </div>
    </div>
  )
}

export default App