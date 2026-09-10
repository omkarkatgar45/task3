import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Practice JavaScript', completed: true },
    { text: 'Build a project', completed: false }
  ])

  const toggleTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTasks(updatedTasks)
  }

  return (
    <div>
      <h1>My Task Tracker</h1>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            <span
              style={{
                textDecoration: task.completed
                  ? 'line-through'
                  : 'none'
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App