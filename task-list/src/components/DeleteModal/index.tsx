import Button from "../Button"
import Modal from "../Modal"
import "./style.scss"

const DeleteModal = () => {
  return (
    <Modal>
      <div className="delete-modal">
        <p>Are you sure you want to delete this task?</p>
        <div className="delete-modal__actions">
          <Button title="Delete" onClick={() => {}} />
          <Button title="Cancel" outline onClick={() => {}} />
        </div>
      </div>
    </Modal>
  )
}

export default DeleteModal
