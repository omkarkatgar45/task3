import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My Task Tracker</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  )
}

export default App