import styles from "./reset-password.module.scss";
import useFormData, { TFormValues } from "../../hooks/useFormData";
import AuthForm from "../../components/auth-form/auth-form";
import FormInput from "../../components/form-input/form-input";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShowIcon,
  HideIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword } from "../../utils/api";
import { useAppDispatch } from "../../services/hooks";
import {
  setIsInfoModalOpen,
  setInfoModalText,
} from "../../services/modals/modalsSlice";
import { RESET_PASSWORD_TIPS_DATA } from "../../utils/constants";
import AuthTips from "../../components/auth-tips/auth-tips";

const ResetPassword = () => {
  const formData = useFormData<TFormValues>({
    reset_password_password: '',
    reset_password_token: '',
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault();

    resetPassword(
      formData.values.reset_password_password,
      formData.values.reset_password_token
    )
      .then(() => {
        dispatch(setIsInfoModalOpen(true));
        dispatch(setInfoModalText("Пароль успешно обновлен"));
        navigate("/login", { replace: true });
      })
      .catch((err: TResMessage) => {
        dispatch(setIsInfoModalOpen(true));
        if (err.message === 'Incorrect reset token') {
          dispatch(setInfoModalText('Неверный код'));
        } else {
          dispatch(setInfoModalText(err.message));
        }     
      });
  }

  return (
    <div className={styles.container}>
      <AuthForm
        title="Восстановление пароля"
        buttonText="Сохранить"
        handleSubmit={handleSubmit}
        formData={formData}
      >
        <FormInput
          formData={formData}
          label="Введите новый пароль"
          type="password"
          name="reset_password_password"
          isIcon={true}
          icons={[<ShowIcon type="primary" />, <HideIcon type="primary" />]}
        />
        <FormInput
          formData={formData}
          label="Введите код из письма"
          type="text"
          name="reset_password_token"
          isIcon={false}
        />
      </AuthForm>
      <AuthTips tipsData={RESET_PASSWORD_TIPS_DATA} />
    </div>
  );
}

export default ResetPassword;
