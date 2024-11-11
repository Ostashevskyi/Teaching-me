import Modal from "../components/Modal/Modal";
import Button from "../components/Buttons/Button";
import Calendar from "../components/Icons/Calendar";
import ModalButton from "../components/Buttons/ModalButton";

import useModal from "../hooks/useModal";

const ModalSection = () => {
  const { closeModal, isOpen, openModal } = useModal();
  return (
    <div>
      <Button clickFn={openModal}>Open Modal</Button>
      {isOpen && (
        <Modal isOpen={isOpen}>
          <div>
            <div className="flex gap-5 rounded items-start w-full mb-4">
              <div className="min-w-16 min-h-16 flex-1 flex items-center justify-center bg-purple-200 rounded-full">
                <Calendar />
              </div>
              <div>
                <h2 className="text-base font-bold mb-2">
                  Request for the section
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  Daniel Hamilton wants to start a lesson, please confirm or
                  deny the request
                </p>
                <p className="text-xs text-gray-400">18 Dec, 14:50pm, 2022</p>
              </div>
              <div>
                <button
                  onClick={closeModal}
                  className="w-6 h-6 flex items-center justify-center border border-black rounded-full hover:bg-gray-200/10"
                >
                  X
                </button>
              </div>
            </div>
            <div className="float-right flex gap-3 items-center justify-end">
              <ModalButton>View details</ModalButton>
              <ModalButton isDark clickFn={closeModal}>
                Submit
              </ModalButton>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ModalSection;
