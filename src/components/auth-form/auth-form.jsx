import styles from './auth-form.module.scss';
import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function AuthForm({ title, buttonText, children }) {
  return (
    <form 
      className={styles.form}
      // onSubmit={handleSubmit}
      noValidate
    >
      <h2 className={styles.title}>{title}</h2>
      {children}
      <Button htmlType="submit" type="primary" size="medium">{buttonText}</Button>
    </form>
  )
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default AuthForm;
