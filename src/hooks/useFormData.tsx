import { useState, ChangeEvent } from 'react';

interface IFormValues {
  [name: string]: string;
}

export type TFormData = {
  values: IFormValues;
  errors: IFormValues;
  isValid: boolean;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  setValues: (v: IFormValues) => void;
  setIsValid: (v: boolean) => void;
  resetFormValues: () => void;
};

function useFormValues(): TFormData {
  const [values,  setValues ] = useState<IFormValues>({});
  const [errors,  setErrors ] = useState<IFormValues>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  function handleChange(evt: ChangeEvent<HTMLInputElement>): void {
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

    setIsValid(evt.target.closest('form')!.checkValidity());
  }

  function resetFormValues(): void {
    setValues({});
    setErrors({});
    setIsValid(false);
  }


  return { values, errors, isValid, handleChange, setValues, setIsValid, resetFormValues }
}

export default useFormValues;