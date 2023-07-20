import styles from './reset-password.module.scss';
import useFormData from '../../hooks/useFormData';
import AuthForm from '../auth-form/auth-form';
import FormInput from '../form-input/form-input';
import { Link, useNavigate } from 'react-router-dom';
import { ShowIcon, HideIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { auth } from '../../utils/auth';
import { useDispatch } from 'react-redux';
import { setIsInfoModalOpen, setInfoModalText } from '../../services/modals/modalsSlice';

function ResetPassword() {
  const formData = useFormData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();

    auth.resetPassword(formData.values.reset_password_password, formData.values.reset_password_token)
      .then((res) => {
        if (res.success) {
          dispatch(setIsInfoModalOpen(true));
          dispatch(setInfoModalText("Пароль успешно обновлен"));
          navigate('/login', {replace: true});
        } else {
          dispatch(setIsInfoModalOpen(true));
          dispatch(setInfoModalText(res.error));
        }
      })
  }

  return (
    <div className={styles.container}>
      <AuthForm title='Восстановление пароля' buttonText='Сохранить' handleSubmit={handleSubmit}>
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
      <div className={styles.tips}>
        <p className={styles.tip}>
          Вспомнили пароль? {<Link to="/login" className={styles.tip_link}>Войти</Link>}
        </p>
      </div>
    </div>
  )
}

export default ResetPassword;
