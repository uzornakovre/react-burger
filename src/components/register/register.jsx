import styles from './register.module.scss';
import { Link } from 'react-router-dom';
import useFormData from '../../hooks/useFormData';
import FormInput from '../form-input/form-input';
import { ShowIcon, HideIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function Register() {
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
        <Button htmlType="submit" type="primary" size="medium">Войти</Button>
      </form>
      <div className={styles.tips}>
        <p className={styles.tip}>
          Уже зарегистрированы? {<Link to="/login" className={styles.tip_link}>Войти</Link>}
        </p>
      </div>
    </div>
  )
}

export default Register;
