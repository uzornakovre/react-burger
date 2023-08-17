import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

export type TFormValues = {
  [name: string]: string;
}

export type TFormData<T> = {
  values: T;
  errors: T;
  isValid: boolean;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  setValues: Dispatch<SetStateAction<T>>;
  setIsValid: (v: boolean) => void;
  resetFormValues: () => void;
};

function useFormValues<T>(initial: T): TFormData<T> {
  const [values,  setValues ] = useState<T>(initial);
  const [errors,  setErrors ] = useState<T>(initial);
  const [isValid, setIsValid] = useState(false);

  function handleChange(evt: ChangeEvent<HTMLInputElement>): void {
    const form = evt.target;
    const { value, name, type } = form;
    const regexEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
    setValues(initial);
    setErrors(initial);
    setIsValid(false);
  }


  return { values, errors, isValid, handleChange, setValues, setIsValid, resetFormValues }
}

export default useFormValues;