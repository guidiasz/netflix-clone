import React from 'react';
import { fieldDefaultValues, formDefaultValues, formReducer } from './FormReducer';
export const FormContext = React.createContext();

export const FormProvider = ({ children, onSubmit }) => {
  const [state, dispatch] = React.useReducer(formReducer, formDefaultValues);

  function validateField(name, value) {
    const { validate } = state.fields[name];
    const res = validate(value);
    res && dispatch({ type: 'INPUT_INVALID', name, payload: res });
    return !res;
  }

  function handleFieldChange(name, value) {
    const { status } = state.fields[name];
    if (status !== 'normal') validateField(name, value) && dispatch({ type: 'INPUT_VALID', name });
    dispatch({ type: 'INPUT_UPDATE', name, payload: value });
  }

  function handleFieldBlur(name) {
    const { touched, value } = state.fields[name];
    dispatch({ type: 'INPUT_BLUR', name });
    touched && validateField(name, value);
  }

  function handleFieldFocus(name) {
    dispatch({ type: 'INPUT_FOCUS', name });
  }

  const createField = React.useCallback((name, validate) => {
    const field = {
      [name]: {
        ...fieldDefaultValues,
        name,
        validate,
      },
    };
    dispatch({ type: 'INPUT_CREATE', name, payload: field });
  }, []);

  function getFieldState(name) {
    return state.fields[name];
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fieldsArr = Object.values(state.fields);
    const formData = Object.fromEntries(
      fieldsArr.map(({ name, value }) => {
        return [name, value];
      }),
    );

    if (fieldsArr.every(({ name, value }) => validateField(name, value))) {
      dispatch({ type: 'FORM_LOADING' });
      try {
        await onSubmit(formData);
        dispatch({ type: 'FORM_SUCCESS', payload: 'Enviado com sucesso.' });
      } catch (e) {
        console.log('Ocorreu um erro no envio do form: ', e);
        dispatch({ type: 'FORM_FAILED', payload: 'Erro. Tente novamente mais tarde' });
      }
    }
  }

  return (
    <FormContext.Provider
      value={{
        state,
        createField,
        getFieldState,
        handleFieldChange,
        handleFieldBlur,
        handleFieldFocus,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
