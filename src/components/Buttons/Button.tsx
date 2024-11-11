import { ButtonProps } from "../../types/Button";

const Button = ({ children, cn, clickFn }: ButtonProps) => {
  return (
    <button onClick={clickFn} className={cn}>
      {children}
    </button>
  );
};

export default Button;
