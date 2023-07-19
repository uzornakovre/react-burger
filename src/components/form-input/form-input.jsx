import styles from './form-input.module.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FormInput({ formData, label, type, name, isIcon, icons }) {
  const [currentIcon, setCurrentIcon] = useState(isIcon ? icons[0] : null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  useEffect(() => {
    setCurrentIcon(
      icons && isPasswordVisible 
        ? icons[1]
        : icons && !isPasswordVisible
        ? icons[0]
        : 0
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPasswordVisible]);

  return (
    <div className={styles.input_container}>
      <input 
        type={isPasswordVisible ? 'text' : type}
        name={name}
        className={`${styles.input} ${formData.errors[name] && styles.input_error}`}
        onChange={formData.handleChange}
        value={formData.values[name] || ''}
        required
      />
      <label className={`${styles.input_label} ${formData.values[name] && styles.input_label_active}`}>{label}</label>
      {isIcon && <div className={styles.icon} onClick={togglePasswordVisibility}>{currentIcon}</div>}
      <span className={styles.error}>
        {formData.errors[name]}
      </span>
    </div>
  )
}

FormInput.propTypes = {
  formData: PropTypes.object.isRequired,
  icons: PropTypes.array,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isIcon: PropTypes.bool.isRequired
}

export default FormInput;
