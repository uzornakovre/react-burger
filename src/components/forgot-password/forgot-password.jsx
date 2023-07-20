import styles from './forgot-password.module.scss';
import useFormData from '../../hooks/useFormData';
import AuthForm from '../auth-form/auth-form';
import FormInput from '../form-input/form-input';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../utils/auth';

function ForgotPassword() {
  const formData = useFormData();

  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();

    auth.getResetCode(formData.values.forgot_password_email)
      .then((res) => {
        if (res.success) {
          navigate('/reset-password', {replace: true});
        } else {
          console.log(res.error);
        }
      })
  }

  return (
    <div className={styles.container}>
      <AuthForm title='Восстановление пароля' buttonText='Восстановить' handleSubmit={handleSubmit}>
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
          Вспомнили пароль? {<Link to="/login" className={styles.tip_link}>Войти</Link>}
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword;
