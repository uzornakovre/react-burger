import styles from './forgot-password.module.scss';
import useFormData from '../../hooks/useFormData';
import AuthForm from '../auth-form/auth-form';
import FormInput from '../form-input/form-input';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const formData = useFormData();

  return (
    <div className={styles.container}>
      <AuthForm title='Восстановление пароля' buttonText='Восстановить'>
        <FormInput 
          formData={formData}
          label="Укажите e-mail"
          type="email"
          name="forgot_password_email"
          isIcon={false}
        />
      </AuthForm>
      <div className={styles.tips}>
        <p className={styles.tip}>
          Восстановили пароль? {<Link to="/login" className={styles.tip_link}>Войти</Link>}
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword;
