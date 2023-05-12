import "./style.scss"

type ModalProps = {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  )
}

export default Modal
