import React from 'react';
import { FormContext } from '../../context/FormContext/FormContext';

import {
  Container,
  Floating,
  Label,
  Input,
  Helper,
  Submit,
  Spinner,
  Card,
  Title,
  Link,
  Text,
  Other,
  TogglePassword,
} from './styles/Form';

const FieldContext = React.createContext();

const Form = ({ children, ...props }) => {
  const { handleSubmit } = React.useContext(FormContext);
  return (
    <Container onSubmit={handleSubmit} {...props}>
      {children}
    </Container>
  );
};

const FormCard = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};

Form.Card = FormCard;

const FormTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};

Form.Title = FormTitle;

const FormLink = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};
Form.Link = FormLink;

const FormText = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};
Form.Text = FormText;

const FormField = ({ name, validate, children, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { createField } = React.useContext(FormContext);
  React.useEffect(() => {
    createField(name, validate);
  }, [name, validate, createField]);

  return (
    <FieldContext.Provider value={{ name, validate, showPassword, setShowPassword }}>
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

const FormInput = ({ type = 'text', ...props }) => {
  const { name, showPassword } = React.useContext(FieldContext);
  const { getFieldState, handleFieldChange, handleFieldBlur, handleFieldFocus } =
    React.useContext(FormContext);

  const fieldState = getFieldState(name);
  if (!fieldState) return null;

  return (
    <>
      <Input
        type={type !== 'password' ? type : showPassword ? 'text' : type}
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

const FormTogglePassword = ({ show = 'Mostrar', hide = 'Ocultar', children, ...props }) => {
  const { name, showPassword, setShowPassword } = React.useContext(FieldContext);
  const { getFieldState } = React.useContext(FormContext);
  const value = getFieldState(name)?.value;
  function handleClick(e) {
    e.preventDefault();
    setShowPassword((prevVal) => !prevVal);
  }
  if (!value) return null;
  return (
    <TogglePassword onClick={handleClick} {...props} type="button">
      {showPassword ? hide : show}
      {children}
    </TogglePassword>
  );
};
Form.TogglePassword = FormTogglePassword;

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

const FormSpinner = () => {
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
const FormOther = ({ children, ...props }) => {
  return <Other {...props}>{children}</Other>;
};
Form.Other = FormOther;

export default Form;
