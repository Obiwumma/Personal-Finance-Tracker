import { createPortal } from "react-dom";
import TransactionForm from "./TransactionForm"

function Modal({ isOpen, onClose, children }) {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null; // safeguard in case #modal-root is missing

  if(!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-black dark:text-white p-6 rounded-lg shadow-lg">
        {children}


        <TransactionForm isOpen={isOpen} onClose={onClose} />
        

      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
