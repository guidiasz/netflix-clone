import React from 'react';
import {
  Container,
  Field,
  FieldHelper,
  Form,
  Helper,
  Input,
  Label,
  Submit,
  Title,
} from './styles/OptForm';

const OptForm = ({ children, ...props }) => {
  return (
    <>
      <Form {...props}>{children}</Form>
    </>
  );
};

const OptFormTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};
OptForm.Title = OptFormTitle;

const OptFormField = ({ children, ...props }) => {
  return <Field {...props}>{children}</Field>;
};
OptForm.Field = OptFormField;

const OptFormContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
OptForm.Container = OptFormContainer;

const OptFormLabel = ({ children, ...props }) => {
  return <Label {...props}>{children}</Label>;
};
OptForm.Label = OptFormLabel;

const OptFormInput = ({ children, ...props }) => {
  return <Input {...props}>{children}</Input>;
};
OptForm.Input = OptFormInput;

const OptFormFieldHelper = ({ children, ...props }) => {
  return <FieldHelper {...props}>{children}</FieldHelper>;
};
OptForm.FieldHelper = OptFormFieldHelper;

const OptFormHelper = ({ children, ...props }) => {
  return <Helper {...props}>{children}</Helper>;
};
OptForm.Helper = OptFormHelper;

const OptFormSubmit = ({ children, ...props }) => {
  return <Submit {...props}>{children}</Submit>;
};
OptForm.Submit = OptFormSubmit;

export default OptForm;
