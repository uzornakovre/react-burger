import styles from './login.module.scss';
import { Link } from 'react-router-dom';
import useFormData from '../../hooks/useFormData';
import FormInput from '../form-input/form-input';
import { ShowIcon, HideIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function Login() {
  const formData = useFormData();

  return (
    <div className={styles.container}>
      <form 
        className={styles.form}
        // onSubmit={handleSubmit}
        noValidate
      >
        <h2 className={styles.title}>Вход</h2>
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
          maxLength={16}
        />      
        <Button htmlType="submit" type="primary" size="medium">Войти</Button>
      </form>
      <div className={styles.tips}>
        <p className={styles.tip}>
          Вы - новый пользователь? {<Link to="/register" className={styles.tip_link}>
                                  Зарегистрироваться
                              </Link>}
        </p>
        <p className={styles.tip}>
          Забыли пароль? {<Link to="/forgot-password" className={styles.tip_link}>
                                  Восстановить пароль
                              </Link>}
        </p>
      </div>
    </div>
  )
}

export default Login;
