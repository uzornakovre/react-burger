import FormInput from '../form-input/form-input';
import styles from './profile.module.scss';
import { NavLink } from 'react-router-dom';
import { EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import useFormData from '../../hooks/useFormData';

function Profile() {
  const formData = useFormData();

  function navLinkDefaultClass({ isActive }) {
    if (isActive) {
      return `${styles.nav_link} ${styles.active}`;
    } else return `${styles.nav_link}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.side_container}>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_list}>
            <li className={styles.nav_menu_list_item}>
              <NavLink to="/profile" className={navLinkDefaultClass}>Профиль</NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <NavLink to="/orders" className={navLinkDefaultClass}>История заказов</NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <button className={styles.nav_link}>Выход</button>
            </li>
          </ul>
        </nav>
        <span className={styles.tip}>В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные</span>
      </div>
      <form className={styles.edit_form} noValidate>
        <FormInput
          formData={formData}
          label="Имя"
          type="text"
          name="profile_name"
          isIcon={true}
          icons={[<EditIcon type="primary" />]}
        />
        <FormInput
          formData={formData}
          label="E-mail"
          type="email"
          name="profile_email"
          isIcon={true}
          icons={[<EditIcon type="primary" />]}
        />
        <FormInput
          formData={formData}
          label="Пароль"
          type="password"
          name="profile_password"
          isIcon={true}
          icons={[<EditIcon type="primary" />]}
        />
      </form>
    </div>
  )
}

export default Profile;
