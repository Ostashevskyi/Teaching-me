import React from "react";
import { ButtonProps } from "../../types/Button";

type ModalButtonProps = ButtonProps & {
  isDark?: boolean;
};

const ModalButton = ({ children, clickFn, isDark, cn }: ModalButtonProps) => {
  return (
    <button
      className={`${cn} ${
        isDark ? "text-white bg-black" : "text-black bg-white"
      } rounded-xl px-4 py-1 border`}
      onClick={clickFn}
    >
      {children}
    </button>
  );
};

export default ModalButton;
