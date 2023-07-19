import { useState } from 'react';

function useFormValues() {
  const [values,  setValues ] = useState({});
  const [errors,  setErrors ] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(evt) {
    const form = evt.target;
    const { value, name, type } = form;
    const regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;

    if (type === 'email') {
      const errorEmail = value.match(regexEmail) ? '' : 'Необходимо ввести email в формате email@username.domain'
      form.setCustomValidity(errorEmail);
    }

    setValues({
      ...values,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: evt.target.validationMessage
    })

    setIsValid(evt.target.closest('form').checkValidity());
  }

  function resetFormValues() {
    setValues({});
    setErrors({});
    setIsValid(false);
  }


  return { values, errors, isValid, handleChange, setValues, setIsValid, resetFormValues }
}

export default useFormValues;