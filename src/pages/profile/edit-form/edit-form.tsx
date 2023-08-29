import styles from "./edit-form.module.scss";
import FormInput from "../../../components/form-input/form-input";
import {
  EditIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import useFormData, { TFormValues } from "../../../hooks/useFormData";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { FormEvent, useEffect } from "react";
import { getUserInfo } from "../../../services/auth/selectors";
import { updateUserInfo } from "../../../services/auth/authSlice";
import {
  setIsInfoModalOpen,
  setInfoModalText,
} from "../../../services/modals/modalsSlice";
import { getCookie } from "../../../utils/cookies";

const EditForm = () => {
  const userInfo = useAppSelector(getUserInfo);
  const formData = useFormData<TFormValues>({
    profile_name: "",
    profile_email: "",
    profile_password: "",
  });
  const dispatch = useAppDispatch();
  const accessToken: string | undefined = getCookie("accessToken");

  function setInitialValues(): void {
    formData.setValues({
      profile_name: userInfo.name,
      profile_email: userInfo.email,
      profile_password: "",
    });
  }

  useEffect(() => {
    setInitialValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  function handleUpdateUserInfo(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault();

    dispatch(
      updateUserInfo({
        name: formData.values.profile_name,
        email: formData.values.profile_email,
        password: formData.values?.profile_password.length
          ? formData.values.profile_password
          : undefined,
        token: accessToken,
      })
    ).then(() => {
      dispatch(setIsInfoModalOpen(true));
      dispatch(setInfoModalText("Данные успешно обновлены"));
    });
  }
  return (
    <form
      className={styles.edit_form}
      onSubmit={handleUpdateUserInfo}
      noValidate
    >
      <FormInput
        formData={formData || {}}
        label="Имя"
        type="text"
        name="profile_name"
        isIcon={true}
        icons={[<EditIcon type="primary" />]}
        place="profile"
      />
      <FormInput
        formData={formData || {}}
        label="E-mail"
        type="email"
        name="profile_email"
        isIcon={true}
        icons={[<EditIcon type="primary" />]}
        place="profile"
      />
      <FormInput
        formData={formData || {}}
        label="Пароль"
        type="password"
        name="profile_password"
        isIcon={true}
        icons={[<EditIcon type="primary" />]}
        place="profile"
      />
      <Button
        extraClass={styles.submit}
        htmlType="submit"
        type="primary"
        size="medium"
        disabled={
          (userInfo.email === formData.values.profile_email &&
            userInfo.name === formData.values.profile_name &&
            formData.values.profile_password === "") ||
          !formData.isValid
        }
      >
        Сохранить
      </Button>
      {!(
        (userInfo.email === formData.values.profile_email &&
          userInfo.name === formData.values.profile_name &&
          formData.values.profile_password === "") ||
        !formData.isValid
      ) && (
        <Button
          extraClass={styles.cancel}
          htmlType="button"
          type="primary"
          size="small"
          onClick={setInitialValues}
        >
          Отменить
        </Button>
      )}
    </form>
  );
};

export default EditForm;
