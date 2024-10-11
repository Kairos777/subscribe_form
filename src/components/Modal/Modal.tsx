import React from "react";
import { ModalOverlay, ModalContent } from "./styles";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, isOpen, children }) => {
  return (
    <ModalOverlay
      isOpen={isOpen}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
