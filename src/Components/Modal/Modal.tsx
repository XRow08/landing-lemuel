import React from "react";
import { FC } from "react";
import { CSSTransition } from "react-transition-group";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: any;
};

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="fixed inset-0 transition-opacity bg-gray-400 bg-opacity-75"
          onClick={onClose}
        />
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="modal"
          unmountOnExit
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto sm:max-w-lg">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">{children}</div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
