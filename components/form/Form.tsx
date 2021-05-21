import { MouseEventHandler } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import styles from "./Form.module.css";

export type FormProps = {
  onSubmit: MouseEventHandler<HTMLButtonElement>;
};

function Form({ onSubmit }: FormProps) {
  return (
    <div className={styles.container}>
      <form action="submit">
        <Input
          id="Name"
          label="Name*"
          required={true}
          inputType="text"
          inputChange={(e) => console.log(e.target.value)}
          placeholder={"Name"}
        />
        <Input
          id="email"
          label="E-Mail*"
          required={true}
          inputType="email"
          inputChange={(e) => console.log(e.target.value)}
          placeholder={"E-Mail"}
        />
        <Input
          id="tel"
          label="Telefon*"
          required={true}
          inputType="number"
          inputChange={(e) => console.log(e.target.value)}
          placeholder={"+49 (0) ..."}
        />
        <Input
          id="company"
          label="Unternehmen"
          required={false}
          inputType="text"
          inputChange={(e) => console.log(e.target.value)}
          placeholder={"Unternehmen"}
        />
        <Textarea id="message" label="Nachricht" />
        <Button
          buttonType="submit"
          onClick={onSubmit}
          label="Nachricht senden"
        />
      </form>
    </div>
  );
}

export default Form;
