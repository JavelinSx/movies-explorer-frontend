
import {useState, useCallback, useEffect } from "react";
import { EMAIL_REGEX, TEXT_REGEX } from "./constant";
//хук управления формой и валидации формы
export function useFormWithValidation(initialValue) {

  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if(Object.values(errors).some(value=>value.length>0)){
        setIsValid(false)
    }
  },[errors])

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setIsValid(target.closest("form").checkValidity());
    console.log(value)
    if(value.length === 0){
        setErrors({...errors, [name]: 'Необходимо заполнить это поле' });
    }
    else if(value.length < 2 || value.length > 30){
        setErrors({...errors, [name]: 'Длинна имени должна быть от 2 до 30 символовa' });
    }
    else if(value.name==='name' && !TEXT_REGEX.test(value)){
        setErrors({...errors, [name]: 'Имя может содержать только латиницу, кириллицу, пробел или дефис' })
    }
    else if(value.name==='email' && !EMAIL_REGEX.test(value)){
      console.log('hello')
        setErrors({...errors, [name]: 'Неверный формат email' })
    } else {
        setErrors({...errors, [name]: target.validationMessage});
    }

  };

  const resetForm = useCallback(
    (newValues = initialValue, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}