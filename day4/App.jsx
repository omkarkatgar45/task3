import { useState } from 'react'

function App() {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Task added: ${task}`)
    setTask('')
  }

  return (
    <div>
      <h1>My Task Tracker</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default App