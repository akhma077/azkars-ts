import * as React from "react";

import classes from "./btn.module.css";

interface ButtonProps {
  children: string | JSX.Element;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.btn_next}>
      {children}
    </button>
  );
};

export default Button;
