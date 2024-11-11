import { ButtonProps } from "../../types/Button";

type ModalButtonProps = ButtonProps & {
  isDark?: boolean;
};

const ModalButton = ({ children, clickFn, isDark, cn }: ModalButtonProps) => {
  return (
    <button
      className={`${cn} ${
        isDark
          ? "text-white bg-black hover:bg-black/80"
          : "text-black bg-white hover:bg-gray-200/10"
      } rounded-xl px-4 py-1 border`}
      onClick={clickFn}
    >
      {children}
    </button>
  );
};

export default ModalButton;
