import classNames from "classnames"
import { useState } from "react"
import { ReactComponent as Close } from "../../assets/icons/close.svg"
import Button from "../Button"
import Input from "../Input"
import Modal from "../Modal"
import "./style.scss"

type AddEditTaskFormProps = {
  onClose: () => void
  onSave: (title: string, priority: "high" | "medium" | "low") => void
}

const AddEditTaskForm = ({ onClose, onSave }: AddEditTaskFormProps) => {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium")

  // Check if title is valid (not empty and not just whitespace)
  const isValidTitle = title.trim().length > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValidTitle) {
      onSave(title.trim(), priority)
    }
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">Add Task </span>
            <Close className="cp" onClick={onClose} />
          </div>
          <Input
            label="Task"
            placeholder="Type your task here..."
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
          />
          <div className="modal-priority">
            <span>Priority</span>
            <ul className="priority-buttons">
              {(["high", "medium", "low"] as const).map((priorityOption) => (
                <li
                  key={priorityOption}
                  className={classNames(priorityOption, {
                    [`${priorityOption}-selected`]: priority === priorityOption,
                  })}
                  onClick={() => setPriority(priorityOption)}
                >
                  {priorityOption}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title="Add" onClick={handleSubmit} disabled={!isValidTitle} />
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default AddEditTaskForm
