import { useState } from "react"
import "./App.scss"
import { ReactComponent as Add } from "./assets/icons/add.svg"
import AddEditTaskForm from "./components/AddEditTaskForm"
import Button from "./components/Button"
import DeleteModal from "./components/DeleteModal"
import TaskCard from "./components/TaskCard"
import { taskList as initialTaskList } from "./siteData/taskList"

type Task = {
  id: string
  title: string
  priority: "high" | "medium" | "low"
  status: string
  progress: number
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTaskList as Task[])
  const [showAddEditModal, setShowAddEditModal] = useState(false)
  const showDeleteModal = false

  const handleAddTask = (title: string, priority: "high" | "medium" | "low") => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      priority,
      status: "To Do",
      progress: 0,
    }
    setTasks([newTask, ...tasks]) // Add new task at the beginning
    setShowAddEditModal(false)
  }

  return (
    <div className="container">
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Task List</h2>
          <Button title="Add Task" icon={<Add />} onClick={() => setShowAddEditModal(true)} />
        </div>
        <div className="task-container">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskForm onClose={() => setShowAddEditModal(false)} onSave={handleAddTask} />}
      {showDeleteModal && <DeleteModal />}
    </div>
  )
}

export default App
