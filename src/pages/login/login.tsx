import styles from "./login.module.scss";
import { FormEvent } from "react";
import { useAppDispatch } from "../../services/hooks";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/api";
import useFormData, { TFormValues } from "../../hooks/useFormData";
import FormInput from "../../components/form-input/form-input";
import AuthForm from "../../components/auth-form/auth-form";
import {
  ShowIcon,
  HideIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  setInfoModalText,
  setIsInfoModalOpen,
} from "../../services/modals/modalsSlice";
import { setLoggedIn } from "../../services/auth/authSlice";
import AuthTips from "../../components/auth-tips/auth-tips";
import { LOGIN_TIPS_DATA } from "../../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formData = useFormData<TFormValues>({
    login_email: '',
    login_password: ''
  });

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    if (formData.values?.login_email && formData.values?.login_password) {
      login(formData.values.login_email, formData.values.login_password)
      .then(() => {
        formData.resetFormValues();
        dispatch(setLoggedIn(true));
        navigate("/", { replace: true });
      })
      .catch((err: TResMessage) => {
        dispatch(setIsInfoModalOpen(true));
        dispatch(setInfoModalText("Неверный логин или пароль."));
      });
    }
  }

  return (
    <div className={styles.container}>
      <AuthForm
        title="Вход"
        buttonText="Войти"
        handleSubmit={handleSubmit}
        formData={formData}
      >
        <FormInput
          formData={formData}
          label="E-mail"
          type="email"
          name="login_email"
          isIcon={false}
        />
        <FormInput
          formData={formData}
          label="Пароль"
          type="password"
          name="login_password"
          isIcon={true}
          icons={[<ShowIcon type="primary" />, <HideIcon type="primary" />]}
        />
      </AuthForm>
      <AuthTips tipsData={LOGIN_TIPS_DATA} />
    </div>
  );
}

export default Login;
