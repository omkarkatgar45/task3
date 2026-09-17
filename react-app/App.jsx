import { useEffect, useState } from 'react'
import TaskList from './TaskList'

const API_URL = 'http://127.0.0.1:8000/'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  // Get tasks from Django
  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setTasks(data.tasks || [])
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  // Add task
  const addTask = async () => {
    if (task.trim() === '') return

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          task_name: task,
          description: 'Task added from React',
          status: 'Pending',
        }),
      })

      if (response.ok) {
        setTask('')
        fetchTasks()
      }
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  // Complete task
  const completeTask = async (index) => {
    const selectedTask = tasks[index]

    try {
      await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedTask.id,
          task_name: selectedTask.task_name,
          description: selectedTask.description,
          status:
            selectedTask.status === 'Completed'
              ? 'Pending'
              : 'Completed',
        }),
      })

      fetchTasks()
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  // Delete task
  const deleteTask = async (index) => {
    const selectedTask = tasks[index]

    try {
      await fetch(API_URL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedTask.id,
        }),
      })

      fetchTasks()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
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
