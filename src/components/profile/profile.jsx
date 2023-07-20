import FormInput from "../form-input/form-input";
import styles from "./profile.module.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  EditIcon,
  HideIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import useFormData from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../utils/constants";
import { getCookie } from "../../utils/cookies";
import {
  setIsInfoModalOpen,
  setInfoModalText,
} from "../../services/modals/modalsSlice";
import { updateUserInfo } from "../../services/auth/authSlice";

function Profile({ handleLogout }) {
  const formData = useFormData();
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken");

  function navLinkDefaultClass({ isActive }) {
    if (isActive) {
      return `${styles.nav_link} ${styles.active}`;
    } else return `${styles.nav_link}`;
  }

  function setInitialValues() {
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

  function handleUpdateUserInfo(evt) {
    evt.preventDefault();

    dispatch(
      updateUserInfo({
        name: formData.values.profile_name,
        email: formData.values.profile_email,
        password:
          formData.values.profile_password.length &&
          formData.values.profile_password,
        token: accessToken,
      })
    ).then(() => {
      dispatch(setIsInfoModalOpen(true));
      dispatch(setInfoModalText("Данные успешно обновлены"));
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.side_container}>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_list}>
            <li className={styles.nav_menu_list_item}>
              <NavLink to="/profile" className={navLinkDefaultClass}>
                Профиль
              </NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <NavLink to="/orders" className={navLinkDefaultClass}>
                История заказов
              </NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <button className={styles.nav_link} onClick={handleLogout}>
                Выход
              </button>
            </li>
          </ul>
        </nav>
        <span className={styles.tip}>
          В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные
        </span>
      </div>
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
          icons={[<EditIcon type="primary" />, <HideIcon type="primary" />]}
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
        {
          !((userInfo.email === formData.values.profile_email &&
            userInfo.name === formData.values.profile_name &&
            formData.values.profile_password === "") ||
          !formData.isValid) &&
          <Button
            extraClass={styles.cancel}
            htmlType="button"
            type="primary"
            size="small"
            onClick={setInitialValues}
          >
            Отменить
          </Button>
        }
      </form>
    </div>
  );
}

Profile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Profile;
