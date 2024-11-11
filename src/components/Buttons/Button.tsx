import { ButtonProps } from "../../types/Button";

const Button = ({ children, cn, clickFn }: ButtonProps) => {
  return (
    <button
      onClick={clickFn}
      className={`${cn} border p-2 rounded-md hover:bg-gray-200/10 max-w-[185px]`}
    >
      {children}
    </button>
  );
};

export default Button;
