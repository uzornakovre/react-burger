import styles from './register.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import useFormData from '../../hooks/useFormData';
import FormInput from '../form-input/form-input';
import { ShowIcon, HideIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import AuthForm from '../auth-form/auth-form';
import { auth } from '../../utils/auth';

function Register() {
  const formData = useFormData();

  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();

    if (formData.values.register_password === formData.values.register_confirm_password) {
      auth.register(
        formData.values.register_email,
        formData.values.register_password,
        formData.values.register_username
      )
        .then((res) => {
          if (!res.error && !res.message) {
            console.log('Вы успешно зарегистрировались');
            navigate('/login', {replace: true});
          } else if (!res.error) {
            console.log('Вы ввели некорректный email. Попробуйте еще раз');
          } else {
            console.log(res.error);
          }
        })
    } else console.log('Пароли не совпадают. Попробуйте еще раз')
  }
  
  return (
    <div className={styles.container}>
      <AuthForm title='Регистрация'  buttonText='Зарегистрироваться' handleSubmit={handleSubmit}>
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
          Уже зарегистрированы? {<Link to="/login" className={styles.tip_link}>Войти</Link>}
        </p>
      </div>
    </div>
  )
}

export default Register;
