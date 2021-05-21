import { ChangeEventHandler } from "react";
import styles from "./input.module.css";

export type InputProps = {
  id: string;
  label: string;
  required: boolean;
  inputType: "text" | "number" | "email";
  inputChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
};

function Input({ id, label, required, inputChange, placeholder }: InputProps) {
  return (
    <div className={styles.inputSection}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        required={required}
        onChange={inputChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
