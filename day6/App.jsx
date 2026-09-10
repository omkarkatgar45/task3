function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-blue-600">
          My Task Tracker
        </h1>

        <p className="mb-4 text-gray-600">
          React and Tailwind CSS
        </p>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Add Task
        </button>
      </div>
    </div>
  )
}

export default App