import styles from "./forgot-password.module.scss";
import useFormData, { TFormValues } from "../../hooks/useFormData";
import AuthForm from "../../components/auth-form/auth-form";
import FormInput from "../../components/form-input/form-input";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getResetCode } from "../../utils/api";
import { useAppDispatch } from "../../services/hooks";
import { allowPasswordReset } from "../../services/auth/authSlice";
import { RESET_PASSWORD_TIPS_DATA } from "../../utils/constants";
import AuthTips from "../../components/auth-tips/auth-tips";

const ForgotPassword = () => {
  const formData = useFormData<TFormValues>({
    forgot_password_email: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault();

    getResetCode(formData.values.forgot_password_email).then((res: TResMessage) => {
      dispatch(allowPasswordReset(true));
      if (res.success) {
        navigate("/reset-password", { replace: true });
      }
    }).catch((err: TResMessage) => {
      console.log(err)
    })
  }

  return (
    <div className={styles.container}>
      <AuthForm
        title="Восстановление пароля"
        buttonText="Восстановить"
        handleSubmit={handleSubmit}
        formData={formData}
      >
        <FormInput
          formData={formData}
          label="Укажите e-mail"
          type="email"
          name="forgot_password_email"
          isIcon={false}
        />
      </AuthForm>
      <AuthTips tipsData={RESET_PASSWORD_TIPS_DATA} />
    </div>
  );
}

export default ForgotPassword;
