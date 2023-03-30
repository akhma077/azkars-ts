import * as React from "react";

import classes from "./input.module.css";

interface InputFiledsProps {
  type: string;
  value?: any;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFileds: React.FC<InputFiledsProps> = ({
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={classes.input_field}
      placeholder={placeholder}
    />
  );
};

export default InputFileds;
