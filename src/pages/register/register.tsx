import styles from "./register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import useFormData, { TFormValues } from "../../hooks/useFormData";
import FormInput from "../../components/form-input/form-input";
import {
  ShowIcon,
  HideIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthForm from "../../components/auth-form/auth-form";
import { login, register } from "../../utils/api";
import { useAppDispatch } from "../../services/hooks";
import {
  setIsInfoModalOpen,
  setInfoModalText,
} from "../../services/modals/modalsSlice";
import { FormEvent } from "react";
import { setLoggedIn } from "../../services/auth/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formData = useFormData<TFormValues>({
    register_email: '',
    register_username: '',
    register_password: '',
    register_confirm_password: ''
  });

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault();

    if (
      formData.values.register_password ===
      formData.values.register_confirm_password
    ) {
      register(
        formData.values.register_email,
        formData.values.register_password,
        formData.values.register_username
      )
        .then(() => {
          login(
            formData.values.register_email,
            formData.values.register_password
          )
            .then(() => {
              dispatch(setIsInfoModalOpen(true));
              dispatch(setInfoModalText("Вы успешно зарегистрировались"));
              formData.resetFormValues();
              dispatch(setLoggedIn(true));
              navigate("/", { replace: true });
            })
            .catch((err: TResMessage) => {
              console.log(err);
            });
        })
        .catch((err: TResMessage) => {
          dispatch(setIsInfoModalOpen(true));
          if (err.message === "User already exists") {
            dispatch(
              setInfoModalText("Пользователь с таким email уже существует")
            );
          } else {
            dispatch(setInfoModalText(err.message));
          }
        });
    } else {
      dispatch(setIsInfoModalOpen(true));
      dispatch(setInfoModalText("Пароли не совпадают. Попробуйте еще раз"));
    }
  }

  return (
    <div className={styles.container}>
      <AuthForm
        title="Регистрация"
        buttonText="Зарегистрироваться"
        handleSubmit={handleSubmit}
        formData={formData}
      >
        <FormInput
          formData={formData}
          label="Имя"
          type="text"
          name="register_username"
          isIcon={false}
        />
        <FormInput
          formData={formData}
          label="E-mail"
          type="email"
          name="register_email"
          isIcon={false}
        />
        <FormInput
          formData={formData}
          label="Пароль"
          type="password"
          name="register_password"
          isIcon={true}
          icons={[<ShowIcon type="primary" />, <HideIcon type="primary" />]}
        />
        <FormInput
          formData={formData}
          label="Пароль"
          type="password"
          name="register_confirm_password"
          isIcon={true}
          icons={[<ShowIcon type="primary" />, <HideIcon type="primary" />]}
        />
      </AuthForm>
      <div className={styles.tips}>
        <p className={styles.tip}>
          Уже зарегистрированы?{" "}
          {
            <Link to="/login" className={styles.tip_link}>
              Войти
            </Link>
          }
        </p>
      </div>
    </div>
  );
}

export default Register;
