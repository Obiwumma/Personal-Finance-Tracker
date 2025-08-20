import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, children }) {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null; // safeguard in case #modal-root is missing

  if(!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {children}

        <button className="w-20" onClick={onClose}>CLOSE</button>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
