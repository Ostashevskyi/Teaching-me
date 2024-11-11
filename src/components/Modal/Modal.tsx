import React from "react";

import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed top-0 right-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
