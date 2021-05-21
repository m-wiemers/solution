import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  buttonType: "button" | "submit" | "reset";
};

function Button({ label, buttonType, onClick }: ButtonProps) {
  return (
    <button type={buttonType} onClick={onClick} className={styles.btn}>
      {label}
    </button>
  );
}

export default Button;
