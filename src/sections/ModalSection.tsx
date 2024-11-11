import useModal from "../hooks/useModal";
import Modal from "../components/Modal/Modal";
import Calendar from "../components/Icons/Calendar";
import Button from "../components/Buttons/Button";
import ModalButton from "../components/Buttons/ModalButton";

const ModalSection = () => {
  const { closeModal, isOpen, openModal } = useModal();
  return (
    <div>
      <button onClick={openModal}>Open</button>
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
                <Button
                  clickFn={closeModal}
                  cn="w-3 h-3 flex items-center justify-center p-3 border border-black rounded-full"
                >
                  X
                </Button>
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
      )}{" "}
    </div>
  );
};

export default ModalSection;
