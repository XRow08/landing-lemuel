import React, { Fragment } from "react";
import { FC } from "react";
import { useGlobalModalStateStore } from "../../stores/modals";
import { Dialog, Transition } from "@headlessui/react";
import { CardModal } from "../Card/CardModal";

type ModalProps = {
  children: any;
};

export const Modal: FC<ModalProps> = () => {
  const { showModal, setShowModal, item } = useGlobalModalStateStore(
    (state) => state
  );

  if (!showModal) {
    return null;
  }

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[9999] overflow-y-auto"
        onClose={() => setShowModal(false)}
        data-testid={"modal"}
      >
        <div className="flex min-h-screen items-center justify-center p-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-80" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={
                "inline-block transform rounded-xl text-left shadow-xl transition-all sm:align-middle"
              }
            >
              <CardModal item={item!}></CardModal>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
