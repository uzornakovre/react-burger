import styles from './login.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFormData from '../../hooks/useFormData';
import FormInput from '../form-input/form-input';
import { 
  ShowIcon,
  HideIcon,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';

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
        {/* <Input 
          type="text"
          placeholder="Имя"
          onChange={e => setNameInputValue(e.target.value)}
          // icon={'CurrencyIcon'}
          value={nameInputValue}
          name="name"
          // error={false}
          // ref={inputRef}
          // onIconClick={onIconClick}
          // errorText={'Ошибка'}
          size="default"
          // extraClass="ml-1" 
        />
        <EmailInput
          // onChange={onChange}
          // value={value}
          name="email"
          isIcon={false} 
        />
        <PasswordInput
          // onChange={onChange}
          // value={value}
          name="password"
          extraClass="mb-2" 
        /> */}

        <FormInput 
          formData={formData}
          label="Имя"
          type="text"
          name="login_username"
          isIcon={false}
        />
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
                                  Зарегистрироваться
                              </Link>}
        </p>
      </div>
    </div>
  )
}

export default Login;
