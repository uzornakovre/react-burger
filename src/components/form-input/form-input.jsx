import styles from "./form-input.module.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function FormInput({ formData, label, type, name, isIcon, icons, place }) {
  const [currentIcon, setCurrentIcon] = useState(isIcon ? icons[0] : null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);

  function handleIconClick() {
    place !== "profile" && setIsPasswordVisible(!isPasswordVisible);
    setDisabled(false);
  }

  useEffect(() => {
    place !== "profile" && setCurrentIcon(
      icons && icons.length > 1 && isPasswordVisible
        ? icons[1]
        : icons && !isPasswordVisible
        ? icons[0]
        : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPasswordVisible]);

  return (
    <div className={styles.input_container}>
      <input
        type={isPasswordVisible ? "text" : type}
        name={name}
        className={`${styles.input} ${
          formData.errors[name] && styles.input_error
        }`}
        onChange={formData.handleChange}
        value={formData.values[name] || ""}
        id={`${name}_id`}
        minLength={(type === "password" || type === "text") ? 4 : 0}
        disabled={place === "profile" ? disabled : false}
        required
      />
      <label
        className={`${styles.input_label} ${
          (formData.values[name]) && styles.input_label_active
        }`}
        htmlFor={`${name}_id`}
      >
        {label}
      </label>
      {isIcon && (
        <div className={styles.icon} onClick={handleIconClick}>
          {currentIcon}
        </div>
      )}
      <span className={styles.error}>{formData.errors[name]}</span>
    </div>
  );
}

FormInput.propTypes = {
  formData: PropTypes.object,
  icons: PropTypes.array,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isIcon: PropTypes.bool.isRequired,
  place: PropTypes.string
};

export default FormInput;
