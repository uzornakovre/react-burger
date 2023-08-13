import styles from "./auth-form.module.scss";
import { useAppSelector } from "../../services/hooks";
import { getAuthIsLoading } from "../../utils/constants";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { FormEvent, ReactNode } from "react";

interface IAuthFormProps {
  title: string;
  buttonText: string;
  handleSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  formData: TFormData;
  children?: ReactNode;
}

function AuthForm({
  title,
  buttonText,
  handleSubmit,
  formData,
  children,
}: IAuthFormProps) {
  const isLoading: boolean = useAppSelector(getAuthIsLoading);

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.title}>{title}</h2>
      {children}
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        disabled={!formData.isValid || isLoading}
      >
        {buttonText}
      </Button>
    </form>
  );
}

export default AuthForm;
