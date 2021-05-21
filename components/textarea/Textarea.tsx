import styles from "./Textarea.module.css";

export type TextareaProps = {
  id: string;
  label: string;
};

function Textarea({ id, label }: TextareaProps) {
  return (
    <div className={styles.area}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.textarea}>
        <textarea id={id}></textarea>
      </div>
    </div>
  );
}

export default Textarea;
