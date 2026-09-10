import { useState } from "react";

function App() {
  const [taskText, setTaskText] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
      date: "10/09/2026",
      time: "14:31:09",
    },
  ]);

  // Add Task
  const addTask = () => {
    if (taskText.trim() === "") return;

    const now = new Date();

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      date: now.toLocaleDateString("en-GB"),
      time: now.toLocaleTimeString("en-GB"),
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  // Complete / Pending
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          My Task Tracker
        </h1>

        {/* Add Task */}
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Enter a task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
          />

          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Task
          </button>
        </div>

        {/* Complete & Pending */}
        <div className="flex justify-between mb-5 text-lg font-semibold">
          <p className="text-green-600">
            Completed: {completedCount}
          </p>

          <p className="text-orange-600">
            Pending: {pendingCount}
          </p>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="border rounded-lg p-3 flex items-center justify-between"
            >
              <div className="flex items-start gap-3">

                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mt-1"
                />

                <div>
                  <p
                    className={
                      task.completed
                        ? "line-through text-gray-400"
                        : "font-medium"
                    }
                  >
                    {task.text}
                  </p>

                  <p className="text-sm text-gray-500">
                    📅 {task.date} &nbsp; 🕒 {task.time}
                  </p>
                </div>

              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;