import styles from "./auth-form.module.scss";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getAuthIsLoading } from "../../utils/constants";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function AuthForm({ title, buttonText, handleSubmit, formData, children }) {
  const isLoading = useSelector(getAuthIsLoading);

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.title}>{title}</h2>
      {children}
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        disabled={!formData.isValid || isLoading}
      >
        {buttonText}
      </Button>
    </form>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default AuthForm;
