function TaskItem({ task, index, onComplete, onDelete }) {
  return (
    <li className="flex items-center gap-3 rounded bg-gray-100 p-3">

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onComplete(index)}
      />

      <div className="flex-1">
        <span
          className={
            task.completed
              ? 'text-gray-500 line-through'
              : 'text-gray-800'
          }
        >
          {task.text}
        </span>

        <p className="mt-1 text-xs text-gray-500">
          📅 {task.date} &nbsp; 🕐 {task.time}
        </p>
      </div>

      <button
        onClick={() => onDelete(index)}
        className="rounded bg-red-500 px-3 py-1 text-white"
      >
        Delete
      </button>

    </li>
  )
}

export default TaskItem