import styles from "./form-input.module.scss";
import { ReactNode, useEffect, useState } from "react";

interface IFormInputProps {
  formData: TFormData;
  label: string;
  type: string;
  name: string;
  isIcon: boolean;
  place?: string;
  icons?: Array<ReactNode>;
}

function FormInput({
  formData,
  label,
  type,
  name,
  isIcon,
  icons,
  place,
}: IFormInputProps) {
  const [currentIcon, setCurrentIcon] = useState<ReactNode | null>(
    isIcon && icons ? icons[0] : null
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  function handleIconClick(): void {
    place !== "profile" && setIsPasswordVisible(!isPasswordVisible);
    setDisabled(false);
  }

  useEffect(() => {
    place !== "profile" &&
      setCurrentIcon(
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
        minLength={type === "password" || type === "text" ? 4 : 0}
        disabled={place === "profile" ? disabled : false}
        required
      />
      <label
        className={`${styles.input_label} ${
          formData.values[name] && styles.input_label_active
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

export default FormInput;
