import React from 'react';
import { FormContext } from '../../context/FormContext/FormContext';

import { Container, Floating, Label, Input, Helper, Submit, Spinner } from './styles/Form';

const FieldContext = React.createContext();

const Form = ({ children, ...props }) => {
  const { handleSubmit } = React.useContext(FormContext);
  return (
    <Container onSubmit={handleSubmit} {...props}>
      {children}
    </Container>
  );
};

const FormField = ({ name, validate, children, ...props }) => {
  const { createField } = React.useContext(FormContext);
  React.useEffect(() => {
    createField(name, validate);
  }, [name, validate, createField]);

  return (
    <FieldContext.Provider value={{ name, validate }}>
      <Floating {...props}>{children}</Floating>
    </FieldContext.Provider>
  );
};
Form.Field = FormField;

const FormLabel = ({ children, ...props }) => {
  const { name } = React.useContext(FieldContext);
  const { getFieldState } = React.useContext(FormContext);
  const fieldState = getFieldState(name);
  if (!fieldState) return null;

  const { value, isActive } = fieldState;
  const isFilled = value.length > 0 && true;

  return (
    <Label $isActive={isActive} $isFilled={isFilled} {...props}>
      {children}
    </Label>
  );
};
Form.Label = FormLabel;

const FormInput = ({ ...props }) => {
  const { name, validate } = React.useContext(FieldContext);
  const { getFieldState, handleFieldChange, handleFieldBlur, handleFieldFocus } =
    React.useContext(FormContext);

  const fieldState = getFieldState(name);
  if (!fieldState) return null;

  return (
    <>
      <Input
        $status={fieldState.status}
        name={name}
        value={fieldState.value}
        onChange={({ target }) => handleFieldChange(name, target.value)}
        onBlur={() => handleFieldBlur(name)}
        onFocus={() => handleFieldFocus(name)}
        {...props}
      />
    </>
  );
};
Form.Input = FormInput;

const FormSubmit = ({ children, ...props }) => {
  const { formStatus } = React.useContext(FormContext).state;
  const isLoading = formStatus === 'loading';
  return (
    <>
      <Submit $isLoading={isLoading} aria-disabled={isLoading} {...props}>
        {isLoading ? <FormSpinner /> : children}
      </Submit>
    </>
  );
};
Form.Submit = FormSubmit;

const FormFieldHelper = ({ helperContent = () => {}, children, ...props }) => {
  const { name } = React.useContext(FieldContext);
  const { getFieldState } = React.useContext(FormContext);
  const fieldState = getFieldState(name);
  if (!fieldState) return null;
  const { status, message } = fieldState;
  const content = helperContent(status, message);

  if (content) {
    return (
      <Helper $status={status} {...props}>
        {content}
      </Helper>
    );
  }
  if (children) {
    return (
      <Helper $status={status} {...props}>
        {children}
      </Helper>
    );
  }
  return null;
};
Form.FieldHelper = FormFieldHelper;

const FormHelper = ({ helperContent = () => null, children, ...props }) => {
  const { formStatus, formMessage } = React.useContext(FormContext).state;
  const content = helperContent(formStatus, formMessage);

  if (content) {
    return (
      <Helper $status={formStatus} {...props}>
        {content}
      </Helper>
    );
  }
  if (children) {
    return (
      <Helper $status={formStatus} {...props}>
        {children}
      </Helper>
    );
  }
  return null;
};
Form.Helper = FormHelper;

const FormSpinner = ({ ...props }) => {
  return (
    <Spinner title="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  );
};
Form.Spinner = FormSpinner;

export default Form;
