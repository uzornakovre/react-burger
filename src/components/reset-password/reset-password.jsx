import styles from './reset-password.module.scss';
import useFormData from '../../hooks/useFormData';
import AuthForm from '../auth-form/auth-form';
import FormInput from '../form-input/form-input';
import { Link } from 'react-router-dom';
import { ShowIcon, HideIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function ResetPassword() {
  const formData = useFormData();

  return (
    <div className={styles.container}>
      <AuthForm title='Восстановление пароля' buttonText='Сохранить'>
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
          name="reset_password_code"
          isIcon={false}
        />
      </AuthForm>
      <div className={styles.tips}>
        <p className={styles.tip}>
          Вспомнили пароль? {<Link to="/login" className={styles.tip_link}>Войти</Link>}
        </p>
      </div>
    </div>
  )
}

export default ResetPassword;
